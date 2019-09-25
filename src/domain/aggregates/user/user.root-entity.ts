import { Document, Model, model, Schema } from "mongoose";
import { IBase } from "../../shared/entities/base.entity";

export interface IUser extends Document, IBase {
  username: string;
  verified: boolean;
  verifiedDate: Date;
  roles: string[];
}

export const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  verified: Boolean,
  verifiedDate: Date,
  createdAt: Date,
  createdBy: String,
  lastUpdateAt: Date,
  lastUpdatedBy: String
});

UserSchema.pre<IUser>("save", function(next) {
  const now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
    this.createdBy = "Test";
  }
  this.lastUpdatedAt = now;
  this.lastUpdatedBy = "Test";
});

export const User: Model<IUser> = model<IUser>("User", UserSchema);
