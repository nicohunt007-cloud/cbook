import { NextResponse } from "next/server"
import { sendOrderConfirmationEmail } from "@/lib/email-service"
import type { OrderDetails } from "@/lib/email-service"

export async function POST(request: Request) {
  try {
    // Parse the request body
    const orderDetails: OrderDetails = await request.json()

    // Validate required fields
    if (
      !orderDetails.customerName ||
      !orderDetails.customerEmail ||
      !orderDetails.celebrityName ||
      !orderDetails.services ||
      orderDetails.services.length === 0
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send confirmation email
    const result = await sendOrderConfirmationEmail(orderDetails)

    if (!result.success) {
      return NextResponse.json({ error: result.error || "Failed to send email" }, { status: 500 })
    }

    // Return success response
    return NextResponse.json({ success: true, message: "Order submitted successfully" })
  } catch (error) {
    console.error("Order submission error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
