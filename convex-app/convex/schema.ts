import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Products: defineTable({
    category: v.string(),
    colour: v.string(),
    price: v.string(),
    productname: v.string(),
  }),
});