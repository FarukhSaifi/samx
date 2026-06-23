import { ERROR_MESSAGES, HTTP_STATUS } from "./constants";
import { AppError } from "./interfaces";

/**
 * API Utilities (Client-side)
 */
export class ApiUtils {
  static createSuccessResponse<T>(data: T, message?: string) {
    return {
      success: true,
      data,
      message,
    };
  }

  static createErrorResponse(error: string, statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR) {
    return {
      success: false,
      error,
      statusCode,
    };
  }

  static handleApiError(error: unknown): AppError {
    if (error instanceof Error) {
      return {
        code: "API_ERROR",
        message: error.message,
        timestamp: new Date(),
      };
    }

    return {
      code: "UNKNOWN_ERROR",
      message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR,
      details: error,
      timestamp: new Date(),
    };
  }
}
