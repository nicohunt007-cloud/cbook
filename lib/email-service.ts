import { Resend } from "resend"
import { v4 as uuidv4 } from "uuid"

// Initialize Resend with API key
const resend = new Resend("re_MSxYngdE_KCXH778xfQHZ6of6udgzFGUP")

// Type for charity donation
interface CharityDonation {
  amount: number
  charityName: string
}

// Type for service
interface Service {
  name: string
  price: number
  duration: string
}

// Type for order details
export interface OrderDetails {
  orderId: string
  orderDate: string
  customerName: string
  customerEmail: string
  customerPhone?: string
  celebrityName: string
  celebrityId: number
  services: Service[]
  totalServicePrice: number
  preferredDate: string
  preferredTime?: string
  occasion?: string
  specialMessage?: string
  paymentMethod: string
  platformFee: number
  processingFee: number
  totalAmount: number
  charityDonation?: CharityDonation
}

// Generate a unique order ID
export function generateOrderId(): string {
  return `ORD-${uuidv4().substring(0, 8).toUpperCase()}`
}

// Format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

// Format date
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Send order confirmation email
export async function sendOrderConfirmationEmail(
  orderDetails: OrderDetails,
): Promise<{ success: boolean; error?: string }> {
  try {
    // Generate HTML for services
    const servicesHtml = orderDetails.services
      .map(
        (service) => `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${service.name}</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${service.duration}</td>
          <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right;">${formatCurrency(
            service.price,
          )}</td>
        </tr>
      `,
      )
      .join("")

    // Generate HTML for charity donation if applicable
    const charityHtml = orderDetails.charityDonation
      ? `
      <tr>
        <td colspan="2" style="padding: 12px; text-align: left; color: #10b981;">Charity Donation (${
          orderDetails.charityDonation.charityName
        })</td>
        <td style="padding: 12px; text-align: right; color: #10b981;">${formatCurrency(
          orderDetails.charityDonation.amount,
        )}</td>
      </tr>
    `
      : ""

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Celebrity Booking Confirmation</title>
      </head>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #f97316; margin-bottom: 10px; font-size: 24px;">ETOILELIEN</h1>
          <p style="font-size: 18px; color: #666;">Celebrity Booking Request</p>
        </div>
        
        <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
          <h2 style="color: #f97316; margin-top: 0;">New Booking Request</h2>
          <p>A new booking request has been submitted for ${orderDetails.celebrityName}.</p>
          <p><strong>Order ID:</strong> ${orderDetails.orderId}</p>
          <p><strong>Date:</strong> ${formatDate(orderDetails.orderDate)}</p>
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #f97316; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Customer Information</h3>
          <p><strong>Name:</strong> ${orderDetails.customerName}</p>
          <p><strong>Email:</strong> ${orderDetails.customerEmail}</p>
          ${orderDetails.customerPhone ? `<p><strong>Phone:</strong> ${orderDetails.customerPhone}</p>` : ""}
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #f97316; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Booking Details</h3>
          <p><strong>Celebrity:</strong> ${orderDetails.celebrityName}</p>
          <p><strong>Preferred Date:</strong> ${formatDate(orderDetails.preferredDate)}</p>
          ${orderDetails.preferredTime ? `<p><strong>Preferred Time:</strong> ${orderDetails.preferredTime}</p>` : ""}
          ${orderDetails.occasion ? `<p><strong>Occasion:</strong> ${orderDetails.occasion}</p>` : ""}
          ${
            orderDetails.specialMessage ? `<p><strong>Special Message:</strong> ${orderDetails.specialMessage}</p>` : ""
          }
        </div>
        
        <div style="margin-bottom: 30px;">
          <h3 style="color: #f97316; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Services & Payment</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
            <thead>
              <tr style="background-color: #f3f4f6;">
                <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0;">Service</th>
                <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0;">Duration</th>
                <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e2e8f0;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${servicesHtml}
              <tr>
                <td colspan="2" style="padding: 12px; text-align: left;">Services Subtotal</td>
                <td style="padding: 12px; text-align: right;">${formatCurrency(orderDetails.totalServicePrice)}</td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 12px; text-align: left;">Platform Fee (5%)</td>
                <td style="padding: 12px; text-align: right;">${formatCurrency(orderDetails.platformFee)}</td>
              </tr>
              <tr>
                <td colspan="2" style="padding: 12px; text-align: left;">Processing Fee</td>
                <td style="padding: 12px; text-align: right;">${formatCurrency(orderDetails.processingFee)}</td>
              </tr>
              ${charityHtml}
              <tr style="font-weight: bold;">
                <td colspan="2" style="padding: 12px; text-align: left; border-top: 2px solid #e2e8f0;">Total</td>
                <td style="padding: 12px; text-align: right; border-top: 2px solid #e2e8f0;">${formatCurrency(
                  orderDetails.totalAmount,
                )}</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Payment Method:</strong> ${orderDetails.paymentMethod}</p>
        </div>
        
        <div style="background-color: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
          <h3 style="color: #f97316; margin-top: 0;">Next Steps</h3>
          <p>Please review this booking request and contact the customer within 48 hours to confirm availability and finalize details.</p>
        </div>
        
        <div style="text-align: center; color: #6b7280; font-size: 14px; margin-top: 40px;">
          <p>ETOILELIEN - Connect with your favorite celebrities</p>
          <p>This is an automated message, please do not reply directly to this email.</p>
        </div>
      </body>
      </html>
    `

    // Send email
    const { data, error } = await resend.emails.send({
      from: "ETOILELIEN <nicolashunt@ettoile-lien.online>",
      to: ["nicohunt007@gmail.com"],
      subject: `New Booking Request: ${orderDetails.celebrityName} (${orderDetails.orderId})`,
      html: emailHtml,
      reply_to: orderDetails.customerEmail,
    })

    if (error) {
      console.error("Email sending failed:", error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Email service error:", error)
    return { success: false, error: String(error) }
  }
}
