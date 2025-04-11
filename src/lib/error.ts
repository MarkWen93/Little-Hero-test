export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code: string = 'INTERNAL_SERVER_ERROR'
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export function handleError(error: unknown) {
  console.error('Error occurred:', error);

  if (error instanceof AppError) {
    return {
      error: {
        message: error.message,
        code: error.code,
        statusCode: error.statusCode,
      },
    };
  }

  if (error instanceof Error) {
    return {
      error: {
        message: error.message,
        code: 'INTERNAL_SERVER_ERROR',
        statusCode: 500,
      },
    };
  }

  return {
    error: {
      message: 'An unexpected error occurred',
      code: 'INTERNAL_SERVER_ERROR',
      statusCode: 500,
    },
  };
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}
