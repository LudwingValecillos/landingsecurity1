// src/utils/api.js

const API_BASE_URL = 'your_api_base_url_here'; // Replace with your actual API base URL

async function get(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`GET request failed: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('GET request error:', error);
    throw error; // Re-throw the error for the caller to handle
  }
}

async function put(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`PUT request failed: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
}

async function deleteRequest(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`DELETE request failed: ${response.status} - ${response.statusText}`);
    }
    return await response.json(); // Or handle no content response differently
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
}

export { get, put, deleteRequest as delete };