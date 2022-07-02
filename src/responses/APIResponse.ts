interface APIResponse {
  success: boolean;
  code: number;
  message?: string[];
  data?: any;
}

export { APIResponse };
