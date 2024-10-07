// @ts-ignore
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const data = await ctx.db.query("Products").collect();
    return data;
  },
});

export const getProduct = query({
  args: { id: v.id("Products") },
  handler: async (ctx, args) => {
    const product = await ctx.db.get(args.id);
    // console.log(product)
    return product;
  },
});

export const addProduct = mutation({
  args: {
    category: v.string(),
    colour: v.string(),
    price: v.string(),
    productname: v.string(),
  },
  handler: async (ctx, args) => {
    const product = await ctx.db.insert("Products", {
      productname: args.productname,
      colour: args.colour,
      price: args.price,
      category: args.category,
    });
    return product;
  },
});

export const updateProduct = mutation({
  args: {
    id: v.id("Products"),
    category: v.string(),
    colour: v.string(),
    price: v.string(),
    productname: v.string(),
  },
  handler: async (ctx, args) => {
    const { id,category,colour,price,productname } = args;
    await ctx.db.patch(id,{category:category,colour:colour,price:price,productname:productname})
  },
});
