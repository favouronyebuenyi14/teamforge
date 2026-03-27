import crypto from "crypto"

export type InterswitchInitPayload = {
  amount: number
  customerName: string
  customerEmail?: string
  customerPhone?: string
  invoiceId: string
}

export function generateTransactionRef() {
  return `ASL-${Date.now()}-${Math.floor(Math.random() * 100000)}`
}

/**
 * NOTE:
 * This is a placeholder service layer.
 * You will replace the request logic with the official Interswitch API calls.
 */
export async function initiateInterswitchPayment(payload: InterswitchInitPayload) {
  const transactionRef = generateTransactionRef()

  // Fake checkout URL for now (replace later)
  const checkoutUrl = `https://sandbox.interswitch/mock-checkout?txnref=${transactionRef}`

  return {
    transactionRef,
    checkoutUrl,
  }
}

export function verifyWebhookSignature(rawBody: string, signature: string) {
  const secret = process.env.INTERSWITCH_WEBHOOK_SECRET || ""
  const hash = crypto.createHmac("sha256", secret).update(rawBody).digest("hex")
  return hash === signature
}