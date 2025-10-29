/**
 * Security utility functions for input sanitization and validation
 * Helps prevent XSS, SQL injection, and other security threats
 */

/**
 * Sanitize string input by removing potentially dangerous characters
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove inline event handlers
    .slice(0, 1000); // Limit length to prevent DoS
}

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate phone number (Turkish format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid phone format
 */
export function validatePhone(phone) {
  // Allow Turkish phone formats: +90 555 123 4567 or 05551234567
  const phoneRegex = /^(\+90|0)?[0-9\s\-()]{10,15}$/;
  return phoneRegex.test(phone);
}

/**
 * Validate name (letters, spaces, common diacritics)
 * @param {string} name - Name to validate
 * @returns {boolean} - True if valid name
 */
export function validateName(name) {
  // Allow letters (including Turkish characters), spaces, hyphens, apostrophes
  const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s\-']{2,50}$/;
  return nameRegex.test(name);
}

/**
 * Validate and sanitize message/textarea input
 * @param {string} message - Message to sanitize
 * @returns {string} - Sanitized message
 */
export function sanitizeMessage(message) {
  if (typeof message !== 'string') return '';
  
  return message
    .trim()
    .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
    .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '') // Remove iframes
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove inline event handlers
    .slice(0, 5000); // Limit length
}

/**
 * Escape HTML special characters
 * @param {string} text - Text to escape
 * @returns {string} - Escaped text
 */
export function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  return text.replace(/[&<>"'/]/g, (char) => map[char]);
}

/**
 * Validate date (must be today or future, within reasonable range)
 * @param {string} dateString - Date string to validate
 * @returns {boolean} - True if valid date
 */
export function validateDate(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1); // Max 1 year in future
  
  return date >= today && date <= maxDate;
}

/**
 * Sanitize URL to prevent open redirect attacks
 * @param {string} url - URL to sanitize
 * @returns {string|null} - Sanitized URL or null if invalid
 */
export function sanitizeUrl(url) {
  if (typeof url !== 'string') return null;
  
  // Only allow relative URLs or URLs from same origin
  if (url.startsWith('/') || url.startsWith('./')) {
    return url;
  }
  
  try {
    const parsedUrl = new URL(url);
    const allowedDomains = ['eryilmazteknik.com.tr', 'www.eryilmazteknik.com.tr'];
    
    if (allowedDomains.includes(parsedUrl.hostname)) {
      return url;
    }
  } catch (e) {
    return null;
  }
  
  return null;
}
