/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Artifact } from '../models/Artifact'
import type { ArtifactUpload } from '../models/ArtifactUpload'
import type { Step } from '../models/Step'
import type { StepRequestBody } from '../models/StepRequestBody'
import type { Task } from '../models/Task'
import type { TaskArtifactsListResponse } from '../models/TaskArtifactsListResponse'
import type { TaskListResponse } from '../models/TaskListResponse'
import type { TaskRequestBody } from '../models/TaskRequestBody'
import type { TaskStepsListResponse } from '../models/TaskStepsListResponse'

import type { CancelablePromise } from '../core/CancelablePromise'
import type { BaseHttpRequest } from '../core/BaseHttpRequest'

export class AgentService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Creates a task for the agent.
   * @param requestBody
   * @returns Task A new agent task was successfully created.
   * @returns any Internal Server Error
   * @throws ApiError
   */
  public createAgentTask(
    requestBody?: TaskRequestBody
  ): CancelablePromise<Task | any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/ap/v1/agent/tasks',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        422: `Unable to process request. Likely due to improperly formatted request.`,
      },
    })
  }

  /**
   * List all tasks that have been created for the agent.
   * @param currentPage Page number
   * @param pageSize Number of items per page
   * @returns TaskListResponse Returned list of agent's tasks.
   * @returns any Internal Server Error
   * @throws ApiError
   */
  public listAgentTasks(
    currentPage: number = 1,
    pageSize: number = 10
  ): CancelablePromise<TaskListResponse | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/ap/v1/agent/tasks',
      query: {
        current_page: currentPage,
        page_size: pageSize,
      },
    })
  }

  /**
   * Get details about a specified agent task.
   * @param taskId ID of the task
   * @returns Task Returned details about an agent task.
   * @returns any Internal Server Error
   * @throws ApiError
   */
  public getAgentTask(taskId: string): CancelablePromise<Task | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/ap/v1/agent/tasks/{task_id}',
      path: {
        task_id: taskId,
      },
      errors: {
        404: `Unable to find entity with a given identifier`,
      },
    })
  }

  /**
   * List all steps for the specified task.
   * @param taskId ID of the task.
   * @param currentPage Page number
   * @param pageSize Number of items per page
   * @returns TaskStepsListResponse Returned list of agent's steps for the specified task.
   * @returns any Internal Server Error
   * @throws ApiError
   */
  public listAgentTaskSteps(
    taskId: string,
    currentPage: number = 1,
    pageSize: number = 10
  ): CancelablePromise<TaskStepsListResponse | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/ap/v1/agent/tasks/{task_id}/steps',
      path: {
        task_id: taskId,
      },
      query: {
        current_page: currentPage,
        page_size: pageSize,
      },
      errors: {
        404: `Unable to find entity with a given identifier`,
      },
    })
  }

  /**
   * Execute a step in the specified agent task.
   * @param taskId ID of the task
   * @param requestBody
   * @returns Step Executed step for the agent task.
   * @returns any Internal Server Error
   * @throws ApiError
   */
  public executeAgentTaskStep(
    taskId: string,
    requestBody?: StepRequestBody
  ): CancelablePromise<Step | any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/ap/v1/agent/tasks/{task_id}/steps',
      path: {
        task_id: taskId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Unable to find entity with a given identifier`,
        422: `Unable to process request. Likely due to improperly formatted request.`,
      },
    })
  }

  /**
   * Get details about a specified task step.
   * @param taskId ID of the task
   * @param stepId ID of the step
   * @returns Step Returned details about an agent task step.
   * @returns any Internal Server Error
   * @throws ApiError
   */
  public getAgentTaskStep(
    taskId: string,
    stepId: string
  ): CancelablePromise<Step | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/ap/v1/agent/tasks/{task_id}/steps/{step_id}',
      path: {
        task_id: taskId,
        step_id: stepId,
      },
      errors: {
        404: `Unable to find entity with a given identifier`,
      },
    })
  }

  /**
   * List all artifacts that have been created for the given task.
   * @param taskId ID of the task
   * @param currentPage Page number
   * @param pageSize Number of items per page
   * @returns TaskArtifactsListResponse Returned the list of artifacts for the task.
   * @returns any Internal Server Error
   * @throws ApiError
   */
  public listAgentTaskArtifacts(
    taskId: string,
    currentPage: number = 1,
    pageSize: number = 10
  ): CancelablePromise<TaskArtifactsListResponse | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/ap/v1/agent/tasks/{task_id}/artifacts',
      path: {
        task_id: taskId,
      },
      query: {
        current_page: currentPage,
        page_size: pageSize,
      },
      errors: {
        404: `Unable to find entity with a given identifier`,
      },
    })
  }

  /**
   * Upload an artifact for the specified task.
   * @param taskId ID of the task
   * @param formData
   * @returns Artifact Returned the content of the artifact.
   * @returns any Internal Server Error
   * @throws ApiError
   */
  public uploadAgentTaskArtifacts(
    taskId: string,
    formData?: ArtifactUpload
  ): CancelablePromise<Artifact | any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/ap/v1/agent/tasks/{task_id}/artifacts',
      path: {
        task_id: taskId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        404: `Unable to find entity with a given identifier`,
      },
    })
  }

  /**
   * Download a specified artifact.
   * @param taskId ID of the task
   * @param artifactId ID of the artifact
   * @returns binary Returned the content of the artifact.
   * @returns any Internal Server Error
   * @throws ApiError
   */
  public downloadAgentTaskArtifact(
    taskId: string,
    artifactId: string
  ): CancelablePromise<Blob | any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/ap/v1/agent/tasks/{task_id}/artifacts/{artifact_id}',
      path: {
        task_id: taskId,
        artifact_id: artifactId,
      },
      errors: {
        404: `Unable to find entity with a given identifier`,
      },
    })
  }
}
