import { Document, Model, model, Schema } from "mongoose";
import { IBase } from "../../shared/entities/base.entity";

export interface IUser extends Document, IBase {
  username: string;
  status: string; // Login or Logout
  roles: string[];
}

export const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: Date,
  createdBy: String,
  lastUpdateAt: Date,
  lastUpdatedBy: String,
  isActive: Boolean
});

UserSchema.pre<IUser>("save", function(next) {
  const now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
    this.createdBy = "Mike";
  }

  if (this.isActive === undefined) {
    this.isActive = false;
  }

  this.lastUpdatedAt = now;
  this.lastUpdatedBy = "Mike";
  next();
});

export const User: Model<IUser> = model<IUser>("User", UserSchema);
