import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combine class names with Tailwind merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency (Euro)
 * @param amount - Amount in euros
 * @returns Formatted currency string (e.g., "€95")
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Format a date string to a human-readable format
 * @param dateString - ISO date string (e.g., "2024-09-15")
 * @returns Formatted date (e.g., "Sep 15, 2024")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IE', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

/**
 * Format a date with month name
 * @param dateString - ISO date string
 * @returns Full date format (e.g., "September 15, 2024")
 */
export function formatFullDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-IE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Get star rating array for rendering
 * @param rating - Number of stars (1-5)
 * @returns Array of boolean values for filled/empty stars
 */
export function getStarArray(rating: number): boolean[] {
  return Array.from({ length: 5 }, (_, i) => i < rating)
}

/**
 * Get season based on current month or specified month
 * @param month - Optional month (0-11), defaults to current month
 * @returns Season name: 'lowSeason' | 'midSeason' | 'highSeason'
 */
export function getCurrentSeason(month?: number): 'lowSeason' | 'midSeason' | 'highSeason' {
  const m = month !== undefined ? month : new Date().getMonth()

  // High season: June, July, August (5, 6, 7)
  if (m >= 5 && m <= 7) return 'highSeason'

  // Mid season: April, May, September (3, 4, 8)
  if (m === 3 || m === 4 || m === 8) return 'midSeason'

  // Low season: October - March
  return 'lowSeason'
}

/**
 * Truncate text to a specified length
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text with ellipsis if needed
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}
