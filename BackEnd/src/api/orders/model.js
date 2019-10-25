import mongoose, { Schema } from 'mongoose'

const ordersSchema = new Schema(
  {
    orderId: { type: String },
    customerId: { type: String },
    totalAmount: { type: Number },
    CHECKSUMHASH: { type: String },
    payTM: {},
    payTMResponse: {}
  },
  {
    timestamps: true
  }
)

ordersSchema.methods = {
  view (full) {
    let view = {
      // simple view
      id: this.id,
      orderId: this.orderId,
      customerId: this.customerId,
      totalAmount: this.totalAmount,
      CHECKSUMHASH: this.CHECKSUMHASH,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
    return view
  }
}

const model = mongoose.model('Orders', ordersSchema)

export const schema = model.schema
export default model
