// @ts-ignore  
import { query } from "./_generated/server";


export const get = query({
    args: {},
    handler: async (ctx) => {
      const data =await ctx.db.query("Products").collect();
      return data
    },
  });