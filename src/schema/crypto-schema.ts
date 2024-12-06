import { z } from 'zod'

//typar el select del codigo y pais
export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

// typar Cripto moneda del select
export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo : z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

//Typar el fetch a las criptos
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

//Typar el objeto que se creo en el state en el form
export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})

//typar los datos mostrados 
export const CryptoPriceSchema = z.object({
    IMAGEURL : z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
})