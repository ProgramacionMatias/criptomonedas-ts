import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from '../schema/crypto-schema'
import { z } from 'zod'

// //typar el select del codigo y pais
export type Currency = z.infer<typeof CurrencySchema>

// typar Cripto moneda del select
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>

//Typar el objeto que se creo en el state en el form
export type Pair = z.infer<typeof PairSchema>

//typar los datos mostrados 
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>