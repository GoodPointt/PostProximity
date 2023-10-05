import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Text is required.'],
    },
    tag: {
      type: String,
      required: [true, 'Tag is required.'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Post = models.Post || model('Post', PostSchema);

export default Post;
