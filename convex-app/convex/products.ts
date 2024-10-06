// @ts-ignore
import { query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const data = await ctx.db.query("Products").collect();
    return data;
  },
});

export const getProduct = query({
  args: { productId: v.id("Products") },
  handler: async (ctx, args) => {
    const product = await ctx.db.get(args.productId);
    // console.log(product)
    return product;
  },
});
