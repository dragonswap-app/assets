import { getAddress, isAddress } from "viem";
import { z } from "zod";

const tokensSchema = z.object({
  tokens: z.array(
    z
      .object({
        chainId: z.number(),
        address: z
          .string()
          .refine(isAddress, { message: "Invalid address" })
          .transform((val) => getAddress(val)),
        decimals: z.number(),
        name: z.string(),
        about: z.string(),
        symbol: z.string(),
        tags: z.array(z.string()),
        logoURI: z.string(),
      })
      .strict()
  ),
});

export { tokensSchema };
