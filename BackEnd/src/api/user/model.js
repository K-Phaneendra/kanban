import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    tasks: [
      {
        task: {
          type: Schema.Types.ObjectId,
          ref: 'Task'
        },
        status: String
      }
    ]
  },
  {
    timestamps: true
  }
)

userSchema.methods = {
  view (full) {
    let view = {
      // simple view
      id: this.id,
      name: this.name,
      image: this.image,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
    return view
  }
}

const model = mongoose.model('User', userSchema)

export const schema = model.schema
export default model
