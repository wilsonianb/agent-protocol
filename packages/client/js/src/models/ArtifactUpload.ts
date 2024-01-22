/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */

/**
 * Artifact to upload to the agent.
 */
export type ArtifactUpload = {
  /**
   * File to upload.
   */
  file: Blob
  /**
   * Relative path of the artifact in the agent's workspace.
   */
  relative_path?: string
}
