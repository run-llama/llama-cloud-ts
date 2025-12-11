import LlamaCloud from 'llama-cloud';
import fs from 'fs';

/**
 * Example demonstrating how to split a concatenated PDF into logical document
 * sections based on content categories.
 *
 * The turing+imagenet+attention.pdf file contains three distinct documents:
 * - Alan Turing's "Intelligent Machinery" essay (pages 1-4)
 * - The ImageNet research paper (pages 5-13)
 * - "Attention is All You Need" research paper (pages 14-24)
 *
 * Document splitting is useful for:
 * - Separating a PDF containing multiple document types
 * - Splitting combined documents into logical sections
 * - Organizing multi-part documents by content type
 */
async function splitDocument() {
  const client = new LlamaCloud();

  // Upload a file to split
  const fileObj = await client.files.upload({
    upload_file: fs.createReadStream('../example_files/turing+imagenet+attention.pdf'),
  });
  const fileId = fileObj.id;
  console.log(`Uploaded file with ID: ${fileId}`);

  // Define categories for splitting
  // The essay category matches Turing's philosophical writing style
  // The research_paper category matches formal academic papers
  const categories = [
    {
      name: 'essay',
      description:
        'A philosophical or reflective piece of writing that presents personal viewpoints, arguments, or thoughts on a topic without strict formal structure',
    },
    {
      name: 'research_paper',
      description:
        'A formal academic paper presenting original research, including methodology, results, and citations in a structured format',
    },
  ];

  // One-shot: create split job, wait for completion, and get result
  const result = await client.beta.split.split({
    categories,
    document_input: { type: 'file_id', value: fileId },
    verbose: true,
  });

  console.log(`\nSplit job completed with status: ${result.status}`);

  if (result.result) {
    console.log(`\nFound ${result.result.segments.length} document segments:`);
    for (const segment of result.result.segments) {
      console.log(`  Category: ${segment.category}`);
      console.log(`  Pages: ${segment.pages.join(', ')}`);
      console.log(`  Confidence: ${segment.confidence_category}`);
      console.log();
    }
  }
}

// Run the example
splitDocument().catch(console.error);

