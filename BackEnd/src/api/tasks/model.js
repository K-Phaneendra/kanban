import mongoose, { Schema } from 'mongoose'

const taskSchema = new Schema(
  {
    name: { type: String }
  },
  {
    timestamps: true
  }
)

taskSchema.methods = {
  view (full) {
    let view = {
      // simple view
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
    return view
  }
}

const model = mongoose.model('Task', taskSchema)

export const schema = model.schema
export default model
