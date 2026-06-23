import { ERROR_MESSAGES, HTTP_STATUS } from "./constants";
import { AppError } from "./interfaces";

/**
 * API Utilities
 *
 * Provides standardized API response creation and error handling.
 * Used across all API routes for consistent response formatting.
 */
export class ApiUtils {
  static createSuccessResponse<T>(data: T, message: string = "Success", statusCode: number = HTTP_STATUS.OK): object {
    return { success: true, data, message, statusCode };
  }

  static createErrorResponse(
    message: string,
    statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    details?: unknown,
  ): object {
    return { success: false, error: message, statusCode, data: details };
  }

  static handleApiError(error: unknown): AppError {
    if (error instanceof Error) {
      return {
        code: "API_ERROR",
        message: error.message,
        timestamp: new Date(),
        details: error,
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

/**
 * Validation Utilities
 */
export class ValidationUtils {
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static isValidPassword(password: string): boolean {
    return password.length >= 6;
  }
}

/**
 * Performance Utilities
 */
export class PerformanceUtils {
  static debounce<T extends (...args: never[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }

  static throttle<T extends (...args: never[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  }
}

/**
 * Environment Utilities
 */
export class EnvironmentUtils {
  static isDevelopment(): boolean {
    return !EnvironmentUtils.isProduction();
  }

  static isProduction(): boolean {
    return process.env.NODE_ENV === "production";
  }

  static getBaseUrl(): string {
    return process.env.NEXT_PUBLIC_BASE_URL || "localhost:3000";
  }
}

/**
 * Date Utilities
 */
export class DateUtils {
  static formatDate(date: string | Date, includeRelative = false): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;

    if (includeRelative) {
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

      if (diffInSeconds < 60) return "just now";
      if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
      if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
      if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    }

    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  static isTokenExpired(expiryTimestamp: number): boolean {
    return Date.now() >= expiryTimestamp;
  }
}

/**
 * String Utilities
 */
export class StringUtils {
  static truncate(str: string, length: number, suffix = "..."): string {
    if (str.length <= length) return str;
    return str.substring(0, length - suffix.length) + suffix;
  }

  static slugify(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  static generateId(length = 8): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
