// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.files.create',
    fullyQualifiedName: 'files.create',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/files',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/files',
  },
  {
    clientCallName: 'client.files.delete',
    fullyQualifiedName: 'files.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/beta/files/{file_id}',
  },
  {
    clientCallName: 'client.files.get',
    fullyQualifiedName: 'files.get',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/files/{file_id}/content',
  },
  {
    clientCallName: 'client.files.query',
    fullyQualifiedName: 'files.query',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/files/query',
  },
  {
    clientCallName: 'client.parsing.create',
    fullyQualifiedName: 'parsing.create',
    httpMethod: 'post',
    httpPath: '/api/v2/parse',
  },
  {
    clientCallName: 'client.parsing.list',
    fullyQualifiedName: 'parsing.list',
    httpMethod: 'get',
    httpPath: '/api/v2/parse',
  },
  {
    clientCallName: 'client.parsing.get',
    fullyQualifiedName: 'parsing.get',
    httpMethod: 'get',
    httpPath: '/api/v2/parse/{job_id}',
  },
  {
    clientCallName: 'client.extraction.run',
    fullyQualifiedName: 'extraction.run',
    httpMethod: 'post',
    httpPath: '/api/v1/extraction/run',
  },
  {
    clientCallName: 'client.extraction.jobs.create',
    fullyQualifiedName: 'extraction.jobs.create',
    httpMethod: 'post',
    httpPath: '/api/v1/extraction/jobs',
  },
  {
    clientCallName: 'client.extraction.jobs.list',
    fullyQualifiedName: 'extraction.jobs.list',
    httpMethod: 'get',
    httpPath: '/api/v1/extraction/jobs',
  },
  {
    clientCallName: 'client.extraction.jobs.file',
    fullyQualifiedName: 'extraction.jobs.file',
    httpMethod: 'post',
    httpPath: '/api/v1/extraction/jobs/file',
  },
  {
    clientCallName: 'client.extraction.jobs.get',
    fullyQualifiedName: 'extraction.jobs.get',
    httpMethod: 'get',
    httpPath: '/api/v1/extraction/jobs/{job_id}',
  },
  {
    clientCallName: 'client.extraction.jobs.getResult',
    fullyQualifiedName: 'extraction.jobs.getResult',
    httpMethod: 'get',
    httpPath: '/api/v1/extraction/jobs/{job_id}/result',
  },
  {
    clientCallName: 'client.extraction.runs.list',
    fullyQualifiedName: 'extraction.runs.list',
    httpMethod: 'get',
    httpPath: '/api/v1/extraction/runs',
  },
  {
    clientCallName: 'client.extraction.runs.delete',
    fullyQualifiedName: 'extraction.runs.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/extraction/runs/{run_id}',
  },
  {
    clientCallName: 'client.extraction.runs.get',
    fullyQualifiedName: 'extraction.runs.get',
    httpMethod: 'get',
    httpPath: '/api/v1/extraction/runs/{run_id}',
  },
  {
    clientCallName: 'client.extraction.runs.getByJob',
    fullyQualifiedName: 'extraction.runs.getByJob',
    httpMethod: 'get',
    httpPath: '/api/v1/extraction/runs/by-job/{job_id}',
  },
  {
    clientCallName: 'client.extraction.extractionAgents.create',
    fullyQualifiedName: 'extraction.extractionAgents.create',
    httpMethod: 'post',
    httpPath: '/api/v1/extraction/extraction-agents',
  },
  {
    clientCallName: 'client.extraction.extractionAgents.update',
    fullyQualifiedName: 'extraction.extractionAgents.update',
    httpMethod: 'put',
    httpPath: '/api/v1/extraction/extraction-agents/{extraction_agent_id}',
  },
  {
    clientCallName: 'client.extraction.extractionAgents.list',
    fullyQualifiedName: 'extraction.extractionAgents.list',
    httpMethod: 'get',
    httpPath: '/api/v1/extraction/extraction-agents',
  },
  {
    clientCallName: 'client.extraction.extractionAgents.delete',
    fullyQualifiedName: 'extraction.extractionAgents.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/extraction/extraction-agents/{extraction_agent_id}',
  },
  {
    clientCallName: 'client.extraction.extractionAgents.get',
    fullyQualifiedName: 'extraction.extractionAgents.get',
    httpMethod: 'get',
    httpPath: '/api/v1/extraction/extraction-agents/{extraction_agent_id}',
  },
  {
    clientCallName: 'client.extraction.extractionAgents.schema.generateSchema',
    fullyQualifiedName: 'extraction.extractionAgents.schema.generateSchema',
    httpMethod: 'post',
    httpPath: '/api/v1/extraction/extraction-agents/schema/generate',
  },
  {
    clientCallName: 'client.extraction.extractionAgents.schema.validateSchema',
    fullyQualifiedName: 'extraction.extractionAgents.schema.validateSchema',
    httpMethod: 'post',
    httpPath: '/api/v1/extraction/extraction-agents/schema/validation',
  },
  {
    clientCallName: 'client.classifier.jobs.create',
    fullyQualifiedName: 'classifier.jobs.create',
    httpMethod: 'post',
    httpPath: '/api/v1/classifier/jobs',
  },
  {
    clientCallName: 'client.classifier.jobs.list',
    fullyQualifiedName: 'classifier.jobs.list',
    httpMethod: 'get',
    httpPath: '/api/v1/classifier/jobs',
  },
  {
    clientCallName: 'client.classifier.jobs.get',
    fullyQualifiedName: 'classifier.jobs.get',
    httpMethod: 'get',
    httpPath: '/api/v1/classifier/jobs/{classify_job_id}',
  },
  {
    clientCallName: 'client.classifier.jobs.getResults',
    fullyQualifiedName: 'classifier.jobs.getResults',
    httpMethod: 'get',
    httpPath: '/api/v1/classifier/jobs/{classify_job_id}/results',
  },
  {
    clientCallName: 'client.projects.list',
    fullyQualifiedName: 'projects.list',
    httpMethod: 'get',
    httpPath: '/api/v1/projects',
  },
  {
    clientCallName: 'client.projects.get',
    fullyQualifiedName: 'projects.get',
    httpMethod: 'get',
    httpPath: '/api/v1/projects/{project_id}',
  },
  {
    clientCallName: 'client.dataSinks.create',
    fullyQualifiedName: 'dataSinks.create',
    httpMethod: 'post',
    httpPath: '/api/v1/data-sinks',
  },
  {
    clientCallName: 'client.dataSinks.update',
    fullyQualifiedName: 'dataSinks.update',
    httpMethod: 'put',
    httpPath: '/api/v1/data-sinks/{data_sink_id}',
  },
  {
    clientCallName: 'client.dataSinks.list',
    fullyQualifiedName: 'dataSinks.list',
    httpMethod: 'get',
    httpPath: '/api/v1/data-sinks',
  },
  {
    clientCallName: 'client.dataSinks.delete',
    fullyQualifiedName: 'dataSinks.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/data-sinks/{data_sink_id}',
  },
  {
    clientCallName: 'client.dataSinks.get',
    fullyQualifiedName: 'dataSinks.get',
    httpMethod: 'get',
    httpPath: '/api/v1/data-sinks/{data_sink_id}',
  },
  {
    clientCallName: 'client.dataSources.create',
    fullyQualifiedName: 'dataSources.create',
    httpMethod: 'post',
    httpPath: '/api/v1/data-sources',
  },
  {
    clientCallName: 'client.dataSources.update',
    fullyQualifiedName: 'dataSources.update',
    httpMethod: 'put',
    httpPath: '/api/v1/data-sources/{data_source_id}',
  },
  {
    clientCallName: 'client.dataSources.list',
    fullyQualifiedName: 'dataSources.list',
    httpMethod: 'get',
    httpPath: '/api/v1/data-sources',
  },
  {
    clientCallName: 'client.dataSources.delete',
    fullyQualifiedName: 'dataSources.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/data-sources/{data_source_id}',
  },
  {
    clientCallName: 'client.dataSources.get',
    fullyQualifiedName: 'dataSources.get',
    httpMethod: 'get',
    httpPath: '/api/v1/data-sources/{data_source_id}',
  },
  {
    clientCallName: 'client.pipelines.create',
    fullyQualifiedName: 'pipelines.create',
    httpMethod: 'post',
    httpPath: '/api/v1/pipelines',
  },
  {
    clientCallName: 'client.pipelines.retrieve',
    fullyQualifiedName: 'pipelines.retrieve',
    httpMethod: 'post',
    httpPath: '/api/v1/pipelines/{pipeline_id}/retrieve',
  },
  {
    clientCallName: 'client.pipelines.update',
    fullyQualifiedName: 'pipelines.update',
    httpMethod: 'put',
    httpPath: '/api/v1/pipelines/{pipeline_id}',
  },
  {
    clientCallName: 'client.pipelines.list',
    fullyQualifiedName: 'pipelines.list',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines',
  },
  {
    clientCallName: 'client.pipelines.delete',
    fullyQualifiedName: 'pipelines.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/pipelines/{pipeline_id}',
  },
  {
    clientCallName: 'client.pipelines.get',
    fullyQualifiedName: 'pipelines.get',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}',
  },
  {
    clientCallName: 'client.pipelines.getStatus',
    fullyQualifiedName: 'pipelines.getStatus',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/status',
  },
  {
    clientCallName: 'client.pipelines.upsert',
    fullyQualifiedName: 'pipelines.upsert',
    httpMethod: 'put',
    httpPath: '/api/v1/pipelines',
  },
  {
    clientCallName: 'client.pipelines.sync.create',
    fullyQualifiedName: 'pipelines.sync.create',
    httpMethod: 'post',
    httpPath: '/api/v1/pipelines/{pipeline_id}/sync',
  },
  {
    clientCallName: 'client.pipelines.sync.cancel',
    fullyQualifiedName: 'pipelines.sync.cancel',
    httpMethod: 'post',
    httpPath: '/api/v1/pipelines/{pipeline_id}/sync/cancel',
  },
  {
    clientCallName: 'client.pipelines.dataSources.update',
    fullyQualifiedName: 'pipelines.dataSources.update',
    httpMethod: 'put',
    httpPath: '/api/v1/pipelines/{pipeline_id}/data-sources/{data_source_id}',
  },
  {
    clientCallName: 'client.pipelines.dataSources.getDataSources',
    fullyQualifiedName: 'pipelines.dataSources.getDataSources',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/data-sources',
  },
  {
    clientCallName: 'client.pipelines.dataSources.getStatus',
    fullyQualifiedName: 'pipelines.dataSources.getStatus',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/data-sources/{data_source_id}/status',
  },
  {
    clientCallName: 'client.pipelines.dataSources.sync',
    fullyQualifiedName: 'pipelines.dataSources.sync',
    httpMethod: 'post',
    httpPath: '/api/v1/pipelines/{pipeline_id}/data-sources/{data_source_id}/sync',
  },
  {
    clientCallName: 'client.pipelines.dataSources.updateDataSources',
    fullyQualifiedName: 'pipelines.dataSources.updateDataSources',
    httpMethod: 'put',
    httpPath: '/api/v1/pipelines/{pipeline_id}/data-sources',
  },
  {
    clientCallName: 'client.pipelines.images.getPageFigure',
    fullyQualifiedName: 'pipelines.images.getPageFigure',
    httpMethod: 'get',
    httpPath: '/api/v1/files/{id}/page-figures/{page_index}/{figure_name}',
  },
  {
    clientCallName: 'client.pipelines.images.getPageScreenshot',
    fullyQualifiedName: 'pipelines.images.getPageScreenshot',
    httpMethod: 'get',
    httpPath: '/api/v1/files/{id}/page_screenshots/{page_index}',
  },
  {
    clientCallName: 'client.pipelines.images.listPageFigures',
    fullyQualifiedName: 'pipelines.images.listPageFigures',
    httpMethod: 'get',
    httpPath: '/api/v1/files/{id}/page-figures',
  },
  {
    clientCallName: 'client.pipelines.images.listPageScreenshots',
    fullyQualifiedName: 'pipelines.images.listPageScreenshots',
    httpMethod: 'get',
    httpPath: '/api/v1/files/{id}/page_screenshots',
  },
  {
    clientCallName: 'client.pipelines.files.create',
    fullyQualifiedName: 'pipelines.files.create',
    httpMethod: 'put',
    httpPath: '/api/v1/pipelines/{pipeline_id}/files',
  },
  {
    clientCallName: 'client.pipelines.files.update',
    fullyQualifiedName: 'pipelines.files.update',
    httpMethod: 'put',
    httpPath: '/api/v1/pipelines/{pipeline_id}/files/{file_id}',
  },
  {
    clientCallName: 'client.pipelines.files.list',
    fullyQualifiedName: 'pipelines.files.list',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/files2',
  },
  {
    clientCallName: 'client.pipelines.files.delete',
    fullyQualifiedName: 'pipelines.files.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/pipelines/{pipeline_id}/files/{file_id}',
  },
  {
    clientCallName: 'client.pipelines.files.getStatus',
    fullyQualifiedName: 'pipelines.files.getStatus',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/files/{file_id}/status',
  },
  {
    clientCallName: 'client.pipelines.files.getStatusCounts',
    fullyQualifiedName: 'pipelines.files.getStatusCounts',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/files/status-counts',
  },
  {
    clientCallName: 'client.pipelines.metadata.create',
    fullyQualifiedName: 'pipelines.metadata.create',
    httpMethod: 'put',
    httpPath: '/api/v1/pipelines/{pipeline_id}/metadata',
  },
  {
    clientCallName: 'client.pipelines.metadata.deleteAll',
    fullyQualifiedName: 'pipelines.metadata.deleteAll',
    httpMethod: 'delete',
    httpPath: '/api/v1/pipelines/{pipeline_id}/metadata',
  },
  {
    clientCallName: 'client.pipelines.documents.create',
    fullyQualifiedName: 'pipelines.documents.create',
    httpMethod: 'post',
    httpPath: '/api/v1/pipelines/{pipeline_id}/documents',
  },
  {
    clientCallName: 'client.pipelines.documents.list',
    fullyQualifiedName: 'pipelines.documents.list',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/documents/paginated',
  },
  {
    clientCallName: 'client.pipelines.documents.delete',
    fullyQualifiedName: 'pipelines.documents.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/pipelines/{pipeline_id}/documents/{document_id}',
  },
  {
    clientCallName: 'client.pipelines.documents.get',
    fullyQualifiedName: 'pipelines.documents.get',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/documents/{document_id}',
  },
  {
    clientCallName: 'client.pipelines.documents.getChunks',
    fullyQualifiedName: 'pipelines.documents.getChunks',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/documents/{document_id}/chunks',
  },
  {
    clientCallName: 'client.pipelines.documents.getStatus',
    fullyQualifiedName: 'pipelines.documents.getStatus',
    httpMethod: 'get',
    httpPath: '/api/v1/pipelines/{pipeline_id}/documents/{document_id}/status',
  },
  {
    clientCallName: 'client.pipelines.documents.sync',
    fullyQualifiedName: 'pipelines.documents.sync',
    httpMethod: 'post',
    httpPath: '/api/v1/pipelines/{pipeline_id}/documents/{document_id}/sync',
  },
  {
    clientCallName: 'client.pipelines.documents.upsert',
    fullyQualifiedName: 'pipelines.documents.upsert',
    httpMethod: 'put',
    httpPath: '/api/v1/pipelines/{pipeline_id}/documents',
  },
  {
    clientCallName: 'client.retrievers.create',
    fullyQualifiedName: 'retrievers.create',
    httpMethod: 'post',
    httpPath: '/api/v1/retrievers',
  },
  {
    clientCallName: 'client.retrievers.update',
    fullyQualifiedName: 'retrievers.update',
    httpMethod: 'put',
    httpPath: '/api/v1/retrievers/{retriever_id}',
  },
  {
    clientCallName: 'client.retrievers.list',
    fullyQualifiedName: 'retrievers.list',
    httpMethod: 'get',
    httpPath: '/api/v1/retrievers',
  },
  {
    clientCallName: 'client.retrievers.delete',
    fullyQualifiedName: 'retrievers.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/retrievers/{retriever_id}',
  },
  {
    clientCallName: 'client.retrievers.get',
    fullyQualifiedName: 'retrievers.get',
    httpMethod: 'get',
    httpPath: '/api/v1/retrievers/{retriever_id}',
  },
  {
    clientCallName: 'client.retrievers.search',
    fullyQualifiedName: 'retrievers.search',
    httpMethod: 'post',
    httpPath: '/api/v1/retrievers/retrieve',
  },
  {
    clientCallName: 'client.retrievers.upsert',
    fullyQualifiedName: 'retrievers.upsert',
    httpMethod: 'put',
    httpPath: '/api/v1/retrievers',
  },
  {
    clientCallName: 'client.retrievers.retriever.search',
    fullyQualifiedName: 'retrievers.retriever.search',
    httpMethod: 'post',
    httpPath: '/api/v1/retrievers/{retriever_id}/retrieve',
  },
  {
    clientCallName: 'client.beta.agentData.update',
    fullyQualifiedName: 'beta.agentData.update',
    httpMethod: 'put',
    httpPath: '/api/v1/beta/agent-data/{item_id}',
  },
  {
    clientCallName: 'client.beta.agentData.delete',
    fullyQualifiedName: 'beta.agentData.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/beta/agent-data/{item_id}',
  },
  {
    clientCallName: 'client.beta.agentData.agentData',
    fullyQualifiedName: 'beta.agentData.agentData',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/agent-data',
  },
  {
    clientCallName: 'client.beta.agentData.aggregate',
    fullyQualifiedName: 'beta.agentData.aggregate',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/agent-data/:aggregate',
  },
  {
    clientCallName: 'client.beta.agentData.deleteByQuery',
    fullyQualifiedName: 'beta.agentData.deleteByQuery',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/agent-data/:delete',
  },
  {
    clientCallName: 'client.beta.agentData.get',
    fullyQualifiedName: 'beta.agentData.get',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/agent-data/{item_id}',
  },
  {
    clientCallName: 'client.beta.agentData.search',
    fullyQualifiedName: 'beta.agentData.search',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/agent-data/:search',
  },
  {
    clientCallName: 'client.beta.parseConfigurations.create',
    fullyQualifiedName: 'beta.parseConfigurations.create',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/parse-configurations',
  },
  {
    clientCallName: 'client.beta.parseConfigurations.update',
    fullyQualifiedName: 'beta.parseConfigurations.update',
    httpMethod: 'put',
    httpPath: '/api/v1/beta/parse-configurations/{config_id}',
  },
  {
    clientCallName: 'client.beta.parseConfigurations.list',
    fullyQualifiedName: 'beta.parseConfigurations.list',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/parse-configurations',
  },
  {
    clientCallName: 'client.beta.parseConfigurations.delete',
    fullyQualifiedName: 'beta.parseConfigurations.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/beta/parse-configurations/{config_id}',
  },
  {
    clientCallName: 'client.beta.parseConfigurations.get',
    fullyQualifiedName: 'beta.parseConfigurations.get',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/parse-configurations/{config_id}',
  },
  {
    clientCallName: 'client.beta.sheets.create',
    fullyQualifiedName: 'beta.sheets.create',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/sheets/jobs',
  },
  {
    clientCallName: 'client.beta.sheets.list',
    fullyQualifiedName: 'beta.sheets.list',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/sheets/jobs',
  },
  {
    clientCallName: 'client.beta.sheets.deleteJob',
    fullyQualifiedName: 'beta.sheets.deleteJob',
    httpMethod: 'delete',
    httpPath: '/api/v1/beta/sheets/jobs/{spreadsheet_job_id}',
  },
  {
    clientCallName: 'client.beta.sheets.get',
    fullyQualifiedName: 'beta.sheets.get',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/sheets/jobs/{spreadsheet_job_id}',
  },
  {
    clientCallName: 'client.beta.sheets.getResultTable',
    fullyQualifiedName: 'beta.sheets.getResultTable',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/sheets/jobs/{spreadsheet_job_id}/regions/{region_id}/result/{region_type}',
  },
  {
    clientCallName: 'client.beta.directories.create',
    fullyQualifiedName: 'beta.directories.create',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/directories',
  },
  {
    clientCallName: 'client.beta.directories.update',
    fullyQualifiedName: 'beta.directories.update',
    httpMethod: 'patch',
    httpPath: '/api/v1/beta/directories/{directory_id}',
  },
  {
    clientCallName: 'client.beta.directories.list',
    fullyQualifiedName: 'beta.directories.list',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/directories',
  },
  {
    clientCallName: 'client.beta.directories.delete',
    fullyQualifiedName: 'beta.directories.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/beta/directories/{directory_id}',
  },
  {
    clientCallName: 'client.beta.directories.get',
    fullyQualifiedName: 'beta.directories.get',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/directories/{directory_id}',
  },
  {
    clientCallName: 'client.beta.directories.files.update',
    fullyQualifiedName: 'beta.directories.files.update',
    httpMethod: 'patch',
    httpPath: '/api/v1/beta/directories/{directory_id}/files/{directory_file_id}',
  },
  {
    clientCallName: 'client.beta.directories.files.list',
    fullyQualifiedName: 'beta.directories.files.list',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/directories/{directory_id}/files',
  },
  {
    clientCallName: 'client.beta.directories.files.delete',
    fullyQualifiedName: 'beta.directories.files.delete',
    httpMethod: 'delete',
    httpPath: '/api/v1/beta/directories/{directory_id}/files/{directory_file_id}',
  },
  {
    clientCallName: 'client.beta.directories.files.add',
    fullyQualifiedName: 'beta.directories.files.add',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/directories/{directory_id}/files',
  },
  {
    clientCallName: 'client.beta.directories.files.get',
    fullyQualifiedName: 'beta.directories.files.get',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/directories/{directory_id}/files/{directory_file_id}',
  },
  {
    clientCallName: 'client.beta.directories.files.upload',
    fullyQualifiedName: 'beta.directories.files.upload',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/directories/{directory_id}/files/upload',
  },
  {
    clientCallName: 'client.beta.batch.create',
    fullyQualifiedName: 'beta.batch.create',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/batch-processing',
  },
  {
    clientCallName: 'client.beta.batch.list',
    fullyQualifiedName: 'beta.batch.list',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/batch-processing',
  },
  {
    clientCallName: 'client.beta.batch.cancel',
    fullyQualifiedName: 'beta.batch.cancel',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/batch-processing/{job_id}/cancel',
  },
  {
    clientCallName: 'client.beta.batch.getStatus',
    fullyQualifiedName: 'beta.batch.getStatus',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/batch-processing/{job_id}',
  },
  {
    clientCallName: 'client.beta.batch.jobItems.list',
    fullyQualifiedName: 'beta.batch.jobItems.list',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/batch-processing/{job_id}/items',
  },
  {
    clientCallName: 'client.beta.batch.jobItems.getProcessingResults',
    fullyQualifiedName: 'beta.batch.jobItems.getProcessingResults',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/batch-processing/items/{item_id}/processing-results',
  },
  {
    clientCallName: 'client.beta.split.create',
    fullyQualifiedName: 'beta.split.create',
    httpMethod: 'post',
    httpPath: '/api/v1/beta/split/jobs',
  },
  {
    clientCallName: 'client.beta.split.list',
    fullyQualifiedName: 'beta.split.list',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/split/jobs',
  },
  {
    clientCallName: 'client.beta.split.get',
    fullyQualifiedName: 'beta.split.get',
    httpMethod: 'get',
    httpPath: '/api/v1/beta/split/jobs/{split_job_id}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
