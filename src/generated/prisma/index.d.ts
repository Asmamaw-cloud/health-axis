
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * Core users
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Provider
 * Providers
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model Pharmacy
 * Pharmacies
 */
export type Pharmacy = $Result.DefaultSelection<Prisma.$PharmacyPayload>
/**
 * Model PharmacyMedicine
 * Pharmacy medicines (Drug Finder)
 */
export type PharmacyMedicine = $Result.DefaultSelection<Prisma.$PharmacyMedicinePayload>
/**
 * Model Consultation
 * Consultations
 */
export type Consultation = $Result.DefaultSelection<Prisma.$ConsultationPayload>
/**
 * Model Prescription
 * Prescriptions
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model HealthReading
 * Health readings (remote monitoring)
 */
export type HealthReading = $Result.DefaultSelection<Prisma.$HealthReadingPayload>
/**
 * Model Message
 * Messages
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Notification
 * Notifications (in-app + email ready)
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  patient: 'patient',
  provider: 'provider',
  pharmacy: 'pharmacy',
  admin: 'admin'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VerificationStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const ConsultationStatus: {
  pending: 'pending',
  scheduled: 'scheduled',
  completed: 'completed',
  cancelled: 'cancelled',
  rejected: 'rejected',
  expired: 'expired'
};

export type ConsultationStatus = (typeof ConsultationStatus)[keyof typeof ConsultationStatus]


export const ConsultationType: {
  video: 'video',
  audio: 'audio',
  chat: 'chat'
};

export type ConsultationType = (typeof ConsultationType)[keyof typeof ConsultationType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type ConsultationStatus = $Enums.ConsultationStatus

export const ConsultationStatus: typeof $Enums.ConsultationStatus

export type ConsultationType = $Enums.ConsultationType

export const ConsultationType: typeof $Enums.ConsultationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacyMedicine`: Exposes CRUD operations for the **PharmacyMedicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PharmacyMedicines
    * const pharmacyMedicines = await prisma.pharmacyMedicine.findMany()
    * ```
    */
  get pharmacyMedicine(): Prisma.PharmacyMedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultation`: Exposes CRUD operations for the **Consultation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultations
    * const consultations = await prisma.consultation.findMany()
    * ```
    */
  get consultation(): Prisma.ConsultationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.healthReading`: Exposes CRUD operations for the **HealthReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthReadings
    * const healthReadings = await prisma.healthReading.findMany()
    * ```
    */
  get healthReading(): Prisma.HealthReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Provider: 'Provider',
    Pharmacy: 'Pharmacy',
    PharmacyMedicine: 'PharmacyMedicine',
    Consultation: 'Consultation',
    Prescription: 'Prescription',
    HealthReading: 'HealthReading',
    Message: 'Message',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "provider" | "pharmacy" | "pharmacyMedicine" | "consultation" | "prescription" | "healthReading" | "message" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      Pharmacy: {
        payload: Prisma.$PharmacyPayload<ExtArgs>
        fields: Prisma.PharmacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findFirst: {
            args: Prisma.PharmacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findMany: {
            args: Prisma.PharmacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          create: {
            args: Prisma.PharmacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          createMany: {
            args: Prisma.PharmacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          delete: {
            args: Prisma.PharmacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          update: {
            args: Prisma.PharmacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmacyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          upsert: {
            args: Prisma.PharmacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          aggregate: {
            args: Prisma.PharmacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacy>
          }
          groupBy: {
            args: Prisma.PharmacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyCountAggregateOutputType> | number
          }
        }
      }
      PharmacyMedicine: {
        payload: Prisma.$PharmacyMedicinePayload<ExtArgs>
        fields: Prisma.PharmacyMedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyMedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyMedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload>
          }
          findFirst: {
            args: Prisma.PharmacyMedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyMedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload>
          }
          findMany: {
            args: Prisma.PharmacyMedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload>[]
          }
          create: {
            args: Prisma.PharmacyMedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload>
          }
          createMany: {
            args: Prisma.PharmacyMedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacyMedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload>[]
          }
          delete: {
            args: Prisma.PharmacyMedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload>
          }
          update: {
            args: Prisma.PharmacyMedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload>
          }
          deleteMany: {
            args: Prisma.PharmacyMedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyMedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmacyMedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload>[]
          }
          upsert: {
            args: Prisma.PharmacyMedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyMedicinePayload>
          }
          aggregate: {
            args: Prisma.PharmacyMedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacyMedicine>
          }
          groupBy: {
            args: Prisma.PharmacyMedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyMedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyMedicineCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyMedicineCountAggregateOutputType> | number
          }
        }
      }
      Consultation: {
        payload: Prisma.$ConsultationPayload<ExtArgs>
        fields: Prisma.ConsultationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findFirst: {
            args: Prisma.ConsultationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findMany: {
            args: Prisma.ConsultationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          create: {
            args: Prisma.ConsultationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          createMany: {
            args: Prisma.ConsultationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          delete: {
            args: Prisma.ConsultationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          update: {
            args: Prisma.ConsultationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          aggregate: {
            args: Prisma.ConsultationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultation>
          }
          groupBy: {
            args: Prisma.ConsultationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      HealthReading: {
        payload: Prisma.$HealthReadingPayload<ExtArgs>
        fields: Prisma.HealthReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload>
          }
          findFirst: {
            args: Prisma.HealthReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload>
          }
          findMany: {
            args: Prisma.HealthReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload>[]
          }
          create: {
            args: Prisma.HealthReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload>
          }
          createMany: {
            args: Prisma.HealthReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload>[]
          }
          delete: {
            args: Prisma.HealthReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload>
          }
          update: {
            args: Prisma.HealthReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload>
          }
          deleteMany: {
            args: Prisma.HealthReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload>[]
          }
          upsert: {
            args: Prisma.HealthReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthReadingPayload>
          }
          aggregate: {
            args: Prisma.HealthReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealthReading>
          }
          groupBy: {
            args: Prisma.HealthReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthReadingCountArgs<ExtArgs>
            result: $Utils.Optional<HealthReadingCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    provider?: ProviderOmit
    pharmacy?: PharmacyOmit
    pharmacyMedicine?: PharmacyMedicineOmit
    consultation?: ConsultationOmit
    prescription?: PrescriptionOmit
    healthReading?: HealthReadingOmit
    message?: MessageOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentMessages: number
    receivedMessages: number
    notifications: number
    healthReadings: number
    patientConsultations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    healthReadings?: boolean | UserCountOutputTypeCountHealthReadingsArgs
    patientConsultations?: boolean | UserCountOutputTypeCountPatientConsultationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHealthReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthReadingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    consultations: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultations?: boolean | ProviderCountOutputTypeCountConsultationsArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
  }


  /**
   * Count Type PharmacyCountOutputType
   */

  export type PharmacyCountOutputType = {
    medicines: number
  }

  export type PharmacyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | PharmacyCountOutputTypeCountMedicinesArgs
  }

  // Custom InputTypes
  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyCountOutputType
     */
    select?: PharmacyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyMedicineWhereInput
  }


  /**
   * Count Type ConsultationCountOutputType
   */

  export type ConsultationCountOutputType = {
    prescriptions: number
  }

  export type ConsultationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | ConsultationCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * ConsultationCountOutputType without action
   */
  export type ConsultationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationCountOutputType
     */
    select?: ConsultationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultationCountOutputType without action
   */
  export type ConsultationCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phoneNumber: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string | null
    phoneNumber: string | null
    password: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | User$providerArgs<ExtArgs>
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    healthReadings?: boolean | User$healthReadingsArgs<ExtArgs>
    patientConsultations?: boolean | User$patientConsultationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phoneNumber" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | User$providerArgs<ExtArgs>
    pharmacy?: boolean | User$pharmacyArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    healthReadings?: boolean | User$healthReadingsArgs<ExtArgs>
    patientConsultations?: boolean | User$patientConsultationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs> | null
      pharmacy: Prisma.$PharmacyPayload<ExtArgs> | null
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      healthReadings: Prisma.$HealthReadingPayload<ExtArgs>[]
      patientConsultations: Prisma.$ConsultationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string | null
      phoneNumber: string | null
      password: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends User$providerArgs<ExtArgs> = {}>(args?: Subset<T, User$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pharmacy<T extends User$pharmacyArgs<ExtArgs> = {}>(args?: Subset<T, User$pharmacyArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    healthReadings<T extends User$healthReadingsArgs<ExtArgs> = {}>(args?: Subset<T, User$healthReadingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientConsultations<T extends User$patientConsultationsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientConsultationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.provider
   */
  export type User$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * User.pharmacy
   */
  export type User$pharmacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    where?: PharmacyWhereInput
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.healthReadings
   */
  export type User$healthReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    where?: HealthReadingWhereInput
    orderBy?: HealthReadingOrderByWithRelationInput | HealthReadingOrderByWithRelationInput[]
    cursor?: HealthReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HealthReadingScalarFieldEnum | HealthReadingScalarFieldEnum[]
  }

  /**
   * User.patientConsultations
   */
  export type User$patientConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    cursor?: ConsultationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderAvgAggregateOutputType = {
    yearsExperience: number | null
    consultationFee: Decimal | null
  }

  export type ProviderSumAggregateOutputType = {
    yearsExperience: number | null
    consultationFee: Decimal | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
    yearsExperience: number | null
    consultationFee: Decimal | null
    profileDescription: string | null
    licenseUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
    yearsExperience: number | null
    consultationFee: Decimal | null
    profileDescription: string | null
    licenseUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    userId: number
    specialization: number
    yearsExperience: number
    consultationFee: number
    profileDescription: number
    availabilitySchedule: number
    licenseUrl: number
    verificationStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderAvgAggregateInputType = {
    yearsExperience?: true
    consultationFee?: true
  }

  export type ProviderSumAggregateInputType = {
    yearsExperience?: true
    consultationFee?: true
  }

  export type ProviderMinAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    yearsExperience?: true
    consultationFee?: true
    profileDescription?: true
    licenseUrl?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    yearsExperience?: true
    consultationFee?: true
    profileDescription?: true
    licenseUrl?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    yearsExperience?: true
    consultationFee?: true
    profileDescription?: true
    availabilitySchedule?: true
    licenseUrl?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _avg?: ProviderAvgAggregateInputType
    _sum?: ProviderSumAggregateInputType
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    userId: string
    specialization: string | null
    yearsExperience: number | null
    consultationFee: Decimal | null
    profileDescription: string | null
    availabilitySchedule: JsonValue | null
    licenseUrl: string | null
    verificationStatus: $Enums.VerificationStatus
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _avg: ProviderAvgAggregateOutputType | null
    _sum: ProviderSumAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    yearsExperience?: boolean
    consultationFee?: boolean
    profileDescription?: boolean
    availabilitySchedule?: boolean
    licenseUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    consultations?: boolean | Provider$consultationsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    yearsExperience?: boolean
    consultationFee?: boolean
    profileDescription?: boolean
    availabilitySchedule?: boolean
    licenseUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    yearsExperience?: boolean
    consultationFee?: boolean
    profileDescription?: boolean
    availabilitySchedule?: boolean
    licenseUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    userId?: boolean
    specialization?: boolean
    yearsExperience?: boolean
    consultationFee?: boolean
    profileDescription?: boolean
    availabilitySchedule?: boolean
    licenseUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialization" | "yearsExperience" | "consultationFee" | "profileDescription" | "availabilitySchedule" | "licenseUrl" | "verificationStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    consultations?: boolean | Provider$consultationsArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      consultations: Prisma.$ConsultationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      specialization: string | null
      yearsExperience: number | null
      consultationFee: Prisma.Decimal | null
      profileDescription: string | null
      availabilitySchedule: Prisma.JsonValue | null
      /**
       * Uploaded license URL for admin verification
       */
      licenseUrl: string | null
      verificationStatus: $Enums.VerificationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consultations<T extends Provider$consultationsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly userId: FieldRef<"Provider", 'String'>
    readonly specialization: FieldRef<"Provider", 'String'>
    readonly yearsExperience: FieldRef<"Provider", 'Int'>
    readonly consultationFee: FieldRef<"Provider", 'Decimal'>
    readonly profileDescription: FieldRef<"Provider", 'String'>
    readonly availabilitySchedule: FieldRef<"Provider", 'Json'>
    readonly licenseUrl: FieldRef<"Provider", 'String'>
    readonly verificationStatus: FieldRef<"Provider", 'VerificationStatus'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.consultations
   */
  export type Provider$consultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    cursor?: ConsultationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model Pharmacy
   */

  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pharmacyName: string | null
    location: string | null
    contactInfo: string | null
    licenseUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PharmacyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pharmacyName: string | null
    location: string | null
    contactInfo: string | null
    licenseUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PharmacyCountAggregateOutputType = {
    id: number
    userId: number
    pharmacyName: number
    location: number
    contactInfo: number
    licenseUrl: number
    verificationStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PharmacyMinAggregateInputType = {
    id?: true
    userId?: true
    pharmacyName?: true
    location?: true
    contactInfo?: true
    licenseUrl?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PharmacyMaxAggregateInputType = {
    id?: true
    userId?: true
    pharmacyName?: true
    location?: true
    contactInfo?: true
    licenseUrl?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PharmacyCountAggregateInputType = {
    id?: true
    userId?: true
    pharmacyName?: true
    location?: true
    contactInfo?: true
    licenseUrl?: true
    verificationStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PharmacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithAggregationInput | PharmacyOrderByWithAggregationInput[]
    by: PharmacyScalarFieldEnum[] | PharmacyScalarFieldEnum
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }

  export type PharmacyGroupByOutputType = {
    id: string
    userId: string
    pharmacyName: string
    location: string | null
    contactInfo: string | null
    licenseUrl: string | null
    verificationStatus: $Enums.VerificationStatus
    createdAt: Date
    updatedAt: Date
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pharmacyName?: boolean
    location?: boolean
    contactInfo?: boolean
    licenseUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicines?: boolean | Pharmacy$medicinesArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pharmacyName?: boolean
    location?: boolean
    contactInfo?: boolean
    licenseUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pharmacyName?: boolean
    location?: boolean
    contactInfo?: boolean
    licenseUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>

  export type PharmacySelectScalar = {
    id?: boolean
    userId?: boolean
    pharmacyName?: boolean
    location?: boolean
    contactInfo?: boolean
    licenseUrl?: boolean
    verificationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PharmacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pharmacyName" | "location" | "contactInfo" | "licenseUrl" | "verificationStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["pharmacy"]>
  export type PharmacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    medicines?: boolean | Pharmacy$medicinesArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PharmacyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PharmacyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PharmacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacy"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      medicines: Prisma.$PharmacyMedicinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pharmacyName: string
      location: string | null
      contactInfo: string | null
      /**
       * Uploaded license URL for admin verification
       */
      licenseUrl: string | null
      verificationStatus: $Enums.VerificationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pharmacy"]>
    composites: {}
  }

  type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyDefaultArgs> = $Result.GetResult<Prisma.$PharmacyPayload, S>

  type PharmacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacy'], meta: { name: 'Pharmacy' } }
    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyFindUniqueArgs>(args: SelectSubset<T, PharmacyFindUniqueArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pharmacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyFindFirstArgs>(args?: SelectSubset<T, PharmacyFindFirstArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacyFindManyArgs>(args?: SelectSubset<T, PharmacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
     */
    create<T extends PharmacyCreateArgs>(args: SelectSubset<T, PharmacyCreateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pharmacies.
     * @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyCreateManyArgs>(args?: SelectSubset<T, PharmacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pharmacies and returns the data saved in the database.
     * @param {PharmacyCreateManyAndReturnArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pharmacies and only return the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacyCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
     */
    delete<T extends PharmacyDeleteArgs>(args: SelectSubset<T, PharmacyDeleteArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyUpdateArgs>(args: SelectSubset<T, PharmacyUpdateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyDeleteManyArgs>(args?: SelectSubset<T, PharmacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyUpdateManyArgs>(args: SelectSubset<T, PharmacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies and returns the data updated in the database.
     * @param {PharmacyUpdateManyAndReturnArgs} args - Arguments to update many Pharmacies.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pharmacies and only return the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PharmacyUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmacyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyUpsertArgs>(args: SelectSubset<T, PharmacyUpsertArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacy model
   */
  readonly fields: PharmacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicines<T extends Pharmacy$medicinesArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$medicinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pharmacy model
   */
  interface PharmacyFieldRefs {
    readonly id: FieldRef<"Pharmacy", 'String'>
    readonly userId: FieldRef<"Pharmacy", 'String'>
    readonly pharmacyName: FieldRef<"Pharmacy", 'String'>
    readonly location: FieldRef<"Pharmacy", 'String'>
    readonly contactInfo: FieldRef<"Pharmacy", 'String'>
    readonly licenseUrl: FieldRef<"Pharmacy", 'String'>
    readonly verificationStatus: FieldRef<"Pharmacy", 'VerificationStatus'>
    readonly createdAt: FieldRef<"Pharmacy", 'DateTime'>
    readonly updatedAt: FieldRef<"Pharmacy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacy findUnique
   */
  export type PharmacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findFirst
   */
  export type PharmacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }

  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacy createManyAndReturn
   */
  export type PharmacyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacy updateManyAndReturn
   */
  export type PharmacyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }

  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to delete.
     */
    limit?: number
  }

  /**
   * Pharmacy.medicines
   */
  export type Pharmacy$medicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    where?: PharmacyMedicineWhereInput
    orderBy?: PharmacyMedicineOrderByWithRelationInput | PharmacyMedicineOrderByWithRelationInput[]
    cursor?: PharmacyMedicineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PharmacyMedicineScalarFieldEnum | PharmacyMedicineScalarFieldEnum[]
  }

  /**
   * Pharmacy without action
   */
  export type PharmacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
  }


  /**
   * Model PharmacyMedicine
   */

  export type AggregatePharmacyMedicine = {
    _count: PharmacyMedicineCountAggregateOutputType | null
    _avg: PharmacyMedicineAvgAggregateOutputType | null
    _sum: PharmacyMedicineSumAggregateOutputType | null
    _min: PharmacyMedicineMinAggregateOutputType | null
    _max: PharmacyMedicineMaxAggregateOutputType | null
  }

  export type PharmacyMedicineAvgAggregateOutputType = {
    quantity: number | null
  }

  export type PharmacyMedicineSumAggregateOutputType = {
    quantity: number | null
  }

  export type PharmacyMedicineMinAggregateOutputType = {
    id: string | null
    pharmacyId: string | null
    medicineName: string | null
    genericName: string | null
    quantity: number | null
    availabilityStatus: boolean | null
    updatedAt: Date | null
  }

  export type PharmacyMedicineMaxAggregateOutputType = {
    id: string | null
    pharmacyId: string | null
    medicineName: string | null
    genericName: string | null
    quantity: number | null
    availabilityStatus: boolean | null
    updatedAt: Date | null
  }

  export type PharmacyMedicineCountAggregateOutputType = {
    id: number
    pharmacyId: number
    medicineName: number
    genericName: number
    quantity: number
    availabilityStatus: number
    updatedAt: number
    _all: number
  }


  export type PharmacyMedicineAvgAggregateInputType = {
    quantity?: true
  }

  export type PharmacyMedicineSumAggregateInputType = {
    quantity?: true
  }

  export type PharmacyMedicineMinAggregateInputType = {
    id?: true
    pharmacyId?: true
    medicineName?: true
    genericName?: true
    quantity?: true
    availabilityStatus?: true
    updatedAt?: true
  }

  export type PharmacyMedicineMaxAggregateInputType = {
    id?: true
    pharmacyId?: true
    medicineName?: true
    genericName?: true
    quantity?: true
    availabilityStatus?: true
    updatedAt?: true
  }

  export type PharmacyMedicineCountAggregateInputType = {
    id?: true
    pharmacyId?: true
    medicineName?: true
    genericName?: true
    quantity?: true
    availabilityStatus?: true
    updatedAt?: true
    _all?: true
  }

  export type PharmacyMedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmacyMedicine to aggregate.
     */
    where?: PharmacyMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyMedicines to fetch.
     */
    orderBy?: PharmacyMedicineOrderByWithRelationInput | PharmacyMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PharmacyMedicines
    **/
    _count?: true | PharmacyMedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PharmacyMedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PharmacyMedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMedicineMaxAggregateInputType
  }

  export type GetPharmacyMedicineAggregateType<T extends PharmacyMedicineAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacyMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacyMedicine[P]>
      : GetScalarType<T[P], AggregatePharmacyMedicine[P]>
  }




  export type PharmacyMedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyMedicineWhereInput
    orderBy?: PharmacyMedicineOrderByWithAggregationInput | PharmacyMedicineOrderByWithAggregationInput[]
    by: PharmacyMedicineScalarFieldEnum[] | PharmacyMedicineScalarFieldEnum
    having?: PharmacyMedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyMedicineCountAggregateInputType | true
    _avg?: PharmacyMedicineAvgAggregateInputType
    _sum?: PharmacyMedicineSumAggregateInputType
    _min?: PharmacyMedicineMinAggregateInputType
    _max?: PharmacyMedicineMaxAggregateInputType
  }

  export type PharmacyMedicineGroupByOutputType = {
    id: string
    pharmacyId: string
    medicineName: string
    genericName: string | null
    quantity: number
    availabilityStatus: boolean
    updatedAt: Date
    _count: PharmacyMedicineCountAggregateOutputType | null
    _avg: PharmacyMedicineAvgAggregateOutputType | null
    _sum: PharmacyMedicineSumAggregateOutputType | null
    _min: PharmacyMedicineMinAggregateOutputType | null
    _max: PharmacyMedicineMaxAggregateOutputType | null
  }

  type GetPharmacyMedicineGroupByPayload<T extends PharmacyMedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyMedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyMedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyMedicineGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyMedicineGroupByOutputType[P]>
        }
      >
    >


  export type PharmacyMedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    medicineName?: boolean
    genericName?: boolean
    quantity?: boolean
    availabilityStatus?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacyMedicine"]>

  export type PharmacyMedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    medicineName?: boolean
    genericName?: boolean
    quantity?: boolean
    availabilityStatus?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacyMedicine"]>

  export type PharmacyMedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pharmacyId?: boolean
    medicineName?: boolean
    genericName?: boolean
    quantity?: boolean
    availabilityStatus?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacyMedicine"]>

  export type PharmacyMedicineSelectScalar = {
    id?: boolean
    pharmacyId?: boolean
    medicineName?: boolean
    genericName?: boolean
    quantity?: boolean
    availabilityStatus?: boolean
    updatedAt?: boolean
  }

  export type PharmacyMedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pharmacyId" | "medicineName" | "genericName" | "quantity" | "availabilityStatus" | "updatedAt", ExtArgs["result"]["pharmacyMedicine"]>
  export type PharmacyMedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }
  export type PharmacyMedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }
  export type PharmacyMedicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | PharmacyDefaultArgs<ExtArgs>
  }

  export type $PharmacyMedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PharmacyMedicine"
    objects: {
      pharmacy: Prisma.$PharmacyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pharmacyId: string
      medicineName: string
      genericName: string | null
      quantity: number
      availabilityStatus: boolean
      updatedAt: Date
    }, ExtArgs["result"]["pharmacyMedicine"]>
    composites: {}
  }

  type PharmacyMedicineGetPayload<S extends boolean | null | undefined | PharmacyMedicineDefaultArgs> = $Result.GetResult<Prisma.$PharmacyMedicinePayload, S>

  type PharmacyMedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyMedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyMedicineCountAggregateInputType | true
    }

  export interface PharmacyMedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PharmacyMedicine'], meta: { name: 'PharmacyMedicine' } }
    /**
     * Find zero or one PharmacyMedicine that matches the filter.
     * @param {PharmacyMedicineFindUniqueArgs} args - Arguments to find a PharmacyMedicine
     * @example
     * // Get one PharmacyMedicine
     * const pharmacyMedicine = await prisma.pharmacyMedicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyMedicineFindUniqueArgs>(args: SelectSubset<T, PharmacyMedicineFindUniqueArgs<ExtArgs>>): Prisma__PharmacyMedicineClient<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PharmacyMedicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyMedicineFindUniqueOrThrowArgs} args - Arguments to find a PharmacyMedicine
     * @example
     * // Get one PharmacyMedicine
     * const pharmacyMedicine = await prisma.pharmacyMedicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyMedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyMedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyMedicineClient<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PharmacyMedicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyMedicineFindFirstArgs} args - Arguments to find a PharmacyMedicine
     * @example
     * // Get one PharmacyMedicine
     * const pharmacyMedicine = await prisma.pharmacyMedicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyMedicineFindFirstArgs>(args?: SelectSubset<T, PharmacyMedicineFindFirstArgs<ExtArgs>>): Prisma__PharmacyMedicineClient<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PharmacyMedicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyMedicineFindFirstOrThrowArgs} args - Arguments to find a PharmacyMedicine
     * @example
     * // Get one PharmacyMedicine
     * const pharmacyMedicine = await prisma.pharmacyMedicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyMedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyMedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyMedicineClient<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PharmacyMedicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyMedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PharmacyMedicines
     * const pharmacyMedicines = await prisma.pharmacyMedicine.findMany()
     * 
     * // Get first 10 PharmacyMedicines
     * const pharmacyMedicines = await prisma.pharmacyMedicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyMedicineWithIdOnly = await prisma.pharmacyMedicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacyMedicineFindManyArgs>(args?: SelectSubset<T, PharmacyMedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PharmacyMedicine.
     * @param {PharmacyMedicineCreateArgs} args - Arguments to create a PharmacyMedicine.
     * @example
     * // Create one PharmacyMedicine
     * const PharmacyMedicine = await prisma.pharmacyMedicine.create({
     *   data: {
     *     // ... data to create a PharmacyMedicine
     *   }
     * })
     * 
     */
    create<T extends PharmacyMedicineCreateArgs>(args: SelectSubset<T, PharmacyMedicineCreateArgs<ExtArgs>>): Prisma__PharmacyMedicineClient<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PharmacyMedicines.
     * @param {PharmacyMedicineCreateManyArgs} args - Arguments to create many PharmacyMedicines.
     * @example
     * // Create many PharmacyMedicines
     * const pharmacyMedicine = await prisma.pharmacyMedicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyMedicineCreateManyArgs>(args?: SelectSubset<T, PharmacyMedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PharmacyMedicines and returns the data saved in the database.
     * @param {PharmacyMedicineCreateManyAndReturnArgs} args - Arguments to create many PharmacyMedicines.
     * @example
     * // Create many PharmacyMedicines
     * const pharmacyMedicine = await prisma.pharmacyMedicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PharmacyMedicines and only return the `id`
     * const pharmacyMedicineWithIdOnly = await prisma.pharmacyMedicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacyMedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacyMedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PharmacyMedicine.
     * @param {PharmacyMedicineDeleteArgs} args - Arguments to delete one PharmacyMedicine.
     * @example
     * // Delete one PharmacyMedicine
     * const PharmacyMedicine = await prisma.pharmacyMedicine.delete({
     *   where: {
     *     // ... filter to delete one PharmacyMedicine
     *   }
     * })
     * 
     */
    delete<T extends PharmacyMedicineDeleteArgs>(args: SelectSubset<T, PharmacyMedicineDeleteArgs<ExtArgs>>): Prisma__PharmacyMedicineClient<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PharmacyMedicine.
     * @param {PharmacyMedicineUpdateArgs} args - Arguments to update one PharmacyMedicine.
     * @example
     * // Update one PharmacyMedicine
     * const pharmacyMedicine = await prisma.pharmacyMedicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyMedicineUpdateArgs>(args: SelectSubset<T, PharmacyMedicineUpdateArgs<ExtArgs>>): Prisma__PharmacyMedicineClient<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PharmacyMedicines.
     * @param {PharmacyMedicineDeleteManyArgs} args - Arguments to filter PharmacyMedicines to delete.
     * @example
     * // Delete a few PharmacyMedicines
     * const { count } = await prisma.pharmacyMedicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyMedicineDeleteManyArgs>(args?: SelectSubset<T, PharmacyMedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PharmacyMedicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyMedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PharmacyMedicines
     * const pharmacyMedicine = await prisma.pharmacyMedicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyMedicineUpdateManyArgs>(args: SelectSubset<T, PharmacyMedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PharmacyMedicines and returns the data updated in the database.
     * @param {PharmacyMedicineUpdateManyAndReturnArgs} args - Arguments to update many PharmacyMedicines.
     * @example
     * // Update many PharmacyMedicines
     * const pharmacyMedicine = await prisma.pharmacyMedicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PharmacyMedicines and only return the `id`
     * const pharmacyMedicineWithIdOnly = await prisma.pharmacyMedicine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PharmacyMedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmacyMedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PharmacyMedicine.
     * @param {PharmacyMedicineUpsertArgs} args - Arguments to update or create a PharmacyMedicine.
     * @example
     * // Update or create a PharmacyMedicine
     * const pharmacyMedicine = await prisma.pharmacyMedicine.upsert({
     *   create: {
     *     // ... data to create a PharmacyMedicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PharmacyMedicine we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyMedicineUpsertArgs>(args: SelectSubset<T, PharmacyMedicineUpsertArgs<ExtArgs>>): Prisma__PharmacyMedicineClient<$Result.GetResult<Prisma.$PharmacyMedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PharmacyMedicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyMedicineCountArgs} args - Arguments to filter PharmacyMedicines to count.
     * @example
     * // Count the number of PharmacyMedicines
     * const count = await prisma.pharmacyMedicine.count({
     *   where: {
     *     // ... the filter for the PharmacyMedicines we want to count
     *   }
     * })
    **/
    count<T extends PharmacyMedicineCountArgs>(
      args?: Subset<T, PharmacyMedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyMedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PharmacyMedicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyMedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PharmacyMedicineAggregateArgs>(args: Subset<T, PharmacyMedicineAggregateArgs>): Prisma.PrismaPromise<GetPharmacyMedicineAggregateType<T>>

    /**
     * Group by PharmacyMedicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyMedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PharmacyMedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyMedicineGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyMedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PharmacyMedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PharmacyMedicine model
   */
  readonly fields: PharmacyMedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PharmacyMedicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyMedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacy<T extends PharmacyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmacyDefaultArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PharmacyMedicine model
   */
  interface PharmacyMedicineFieldRefs {
    readonly id: FieldRef<"PharmacyMedicine", 'String'>
    readonly pharmacyId: FieldRef<"PharmacyMedicine", 'String'>
    readonly medicineName: FieldRef<"PharmacyMedicine", 'String'>
    readonly genericName: FieldRef<"PharmacyMedicine", 'String'>
    readonly quantity: FieldRef<"PharmacyMedicine", 'Int'>
    readonly availabilityStatus: FieldRef<"PharmacyMedicine", 'Boolean'>
    readonly updatedAt: FieldRef<"PharmacyMedicine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PharmacyMedicine findUnique
   */
  export type PharmacyMedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyMedicine to fetch.
     */
    where: PharmacyMedicineWhereUniqueInput
  }

  /**
   * PharmacyMedicine findUniqueOrThrow
   */
  export type PharmacyMedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyMedicine to fetch.
     */
    where: PharmacyMedicineWhereUniqueInput
  }

  /**
   * PharmacyMedicine findFirst
   */
  export type PharmacyMedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyMedicine to fetch.
     */
    where?: PharmacyMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyMedicines to fetch.
     */
    orderBy?: PharmacyMedicineOrderByWithRelationInput | PharmacyMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmacyMedicines.
     */
    cursor?: PharmacyMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmacyMedicines.
     */
    distinct?: PharmacyMedicineScalarFieldEnum | PharmacyMedicineScalarFieldEnum[]
  }

  /**
   * PharmacyMedicine findFirstOrThrow
   */
  export type PharmacyMedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyMedicine to fetch.
     */
    where?: PharmacyMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyMedicines to fetch.
     */
    orderBy?: PharmacyMedicineOrderByWithRelationInput | PharmacyMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmacyMedicines.
     */
    cursor?: PharmacyMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmacyMedicines.
     */
    distinct?: PharmacyMedicineScalarFieldEnum | PharmacyMedicineScalarFieldEnum[]
  }

  /**
   * PharmacyMedicine findMany
   */
  export type PharmacyMedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    /**
     * Filter, which PharmacyMedicines to fetch.
     */
    where?: PharmacyMedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmacyMedicines to fetch.
     */
    orderBy?: PharmacyMedicineOrderByWithRelationInput | PharmacyMedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PharmacyMedicines.
     */
    cursor?: PharmacyMedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmacyMedicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmacyMedicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmacyMedicines.
     */
    distinct?: PharmacyMedicineScalarFieldEnum | PharmacyMedicineScalarFieldEnum[]
  }

  /**
   * PharmacyMedicine create
   */
  export type PharmacyMedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a PharmacyMedicine.
     */
    data: XOR<PharmacyMedicineCreateInput, PharmacyMedicineUncheckedCreateInput>
  }

  /**
   * PharmacyMedicine createMany
   */
  export type PharmacyMedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PharmacyMedicines.
     */
    data: PharmacyMedicineCreateManyInput | PharmacyMedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PharmacyMedicine createManyAndReturn
   */
  export type PharmacyMedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * The data used to create many PharmacyMedicines.
     */
    data: PharmacyMedicineCreateManyInput | PharmacyMedicineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PharmacyMedicine update
   */
  export type PharmacyMedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a PharmacyMedicine.
     */
    data: XOR<PharmacyMedicineUpdateInput, PharmacyMedicineUncheckedUpdateInput>
    /**
     * Choose, which PharmacyMedicine to update.
     */
    where: PharmacyMedicineWhereUniqueInput
  }

  /**
   * PharmacyMedicine updateMany
   */
  export type PharmacyMedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PharmacyMedicines.
     */
    data: XOR<PharmacyMedicineUpdateManyMutationInput, PharmacyMedicineUncheckedUpdateManyInput>
    /**
     * Filter which PharmacyMedicines to update
     */
    where?: PharmacyMedicineWhereInput
    /**
     * Limit how many PharmacyMedicines to update.
     */
    limit?: number
  }

  /**
   * PharmacyMedicine updateManyAndReturn
   */
  export type PharmacyMedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * The data used to update PharmacyMedicines.
     */
    data: XOR<PharmacyMedicineUpdateManyMutationInput, PharmacyMedicineUncheckedUpdateManyInput>
    /**
     * Filter which PharmacyMedicines to update
     */
    where?: PharmacyMedicineWhereInput
    /**
     * Limit how many PharmacyMedicines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PharmacyMedicine upsert
   */
  export type PharmacyMedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the PharmacyMedicine to update in case it exists.
     */
    where: PharmacyMedicineWhereUniqueInput
    /**
     * In case the PharmacyMedicine found by the `where` argument doesn't exist, create a new PharmacyMedicine with this data.
     */
    create: XOR<PharmacyMedicineCreateInput, PharmacyMedicineUncheckedCreateInput>
    /**
     * In case the PharmacyMedicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyMedicineUpdateInput, PharmacyMedicineUncheckedUpdateInput>
  }

  /**
   * PharmacyMedicine delete
   */
  export type PharmacyMedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
    /**
     * Filter which PharmacyMedicine to delete.
     */
    where: PharmacyMedicineWhereUniqueInput
  }

  /**
   * PharmacyMedicine deleteMany
   */
  export type PharmacyMedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmacyMedicines to delete
     */
    where?: PharmacyMedicineWhereInput
    /**
     * Limit how many PharmacyMedicines to delete.
     */
    limit?: number
  }

  /**
   * PharmacyMedicine without action
   */
  export type PharmacyMedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyMedicine
     */
    select?: PharmacyMedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PharmacyMedicine
     */
    omit?: PharmacyMedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyMedicineInclude<ExtArgs> | null
  }


  /**
   * Model Consultation
   */

  export type AggregateConsultation = {
    _count: ConsultationCountAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  export type ConsultationMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    providerId: string | null
    consultationDate: Date | null
    consultationTime: Date | null
    consultationStatus: $Enums.ConsultationStatus | null
    consultationType: $Enums.ConsultationType | null
    meetingLink: string | null
    consultationNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultationMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    providerId: string | null
    consultationDate: Date | null
    consultationTime: Date | null
    consultationStatus: $Enums.ConsultationStatus | null
    consultationType: $Enums.ConsultationType | null
    meetingLink: string | null
    consultationNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultationCountAggregateOutputType = {
    id: number
    patientId: number
    providerId: number
    consultationDate: number
    consultationTime: number
    consultationStatus: number
    consultationType: number
    meetingLink: number
    consultationNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConsultationMinAggregateInputType = {
    id?: true
    patientId?: true
    providerId?: true
    consultationDate?: true
    consultationTime?: true
    consultationStatus?: true
    consultationType?: true
    meetingLink?: true
    consultationNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultationMaxAggregateInputType = {
    id?: true
    patientId?: true
    providerId?: true
    consultationDate?: true
    consultationTime?: true
    consultationStatus?: true
    consultationType?: true
    meetingLink?: true
    consultationNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultationCountAggregateInputType = {
    id?: true
    patientId?: true
    providerId?: true
    consultationDate?: true
    consultationTime?: true
    consultationStatus?: true
    consultationType?: true
    meetingLink?: true
    consultationNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConsultationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultation to aggregate.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultations
    **/
    _count?: true | ConsultationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationMaxAggregateInputType
  }

  export type GetConsultationAggregateType<T extends ConsultationAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultation[P]>
      : GetScalarType<T[P], AggregateConsultation[P]>
  }




  export type ConsultationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithAggregationInput | ConsultationOrderByWithAggregationInput[]
    by: ConsultationScalarFieldEnum[] | ConsultationScalarFieldEnum
    having?: ConsultationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationCountAggregateInputType | true
    _min?: ConsultationMinAggregateInputType
    _max?: ConsultationMaxAggregateInputType
  }

  export type ConsultationGroupByOutputType = {
    id: string
    patientId: string
    providerId: string
    consultationDate: Date
    consultationTime: Date
    consultationStatus: $Enums.ConsultationStatus
    consultationType: $Enums.ConsultationType
    meetingLink: string | null
    consultationNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConsultationCountAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  type GetConsultationGroupByPayload<T extends ConsultationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    providerId?: boolean
    consultationDate?: boolean
    consultationTime?: boolean
    consultationStatus?: boolean
    consultationType?: boolean
    meetingLink?: boolean
    consultationNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    prescriptions?: boolean | Consultation$prescriptionsArgs<ExtArgs>
    _count?: boolean | ConsultationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    providerId?: boolean
    consultationDate?: boolean
    consultationTime?: boolean
    consultationStatus?: boolean
    consultationType?: boolean
    meetingLink?: boolean
    consultationNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    providerId?: boolean
    consultationDate?: boolean
    consultationTime?: boolean
    consultationStatus?: boolean
    consultationType?: boolean
    meetingLink?: boolean
    consultationNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectScalar = {
    id?: boolean
    patientId?: boolean
    providerId?: boolean
    consultationDate?: boolean
    consultationTime?: boolean
    consultationStatus?: boolean
    consultationType?: boolean
    meetingLink?: boolean
    consultationNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConsultationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "providerId" | "consultationDate" | "consultationTime" | "consultationStatus" | "consultationType" | "meetingLink" | "consultationNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["consultation"]>
  export type ConsultationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    prescriptions?: boolean | Consultation$prescriptionsArgs<ExtArgs>
    _count?: boolean | ConsultationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsultationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type ConsultationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $ConsultationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultation"
    objects: {
      patient: Prisma.$UserPayload<ExtArgs>
      provider: Prisma.$ProviderPayload<ExtArgs>
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      providerId: string
      consultationDate: Date
      consultationTime: Date
      consultationStatus: $Enums.ConsultationStatus
      consultationType: $Enums.ConsultationType
      meetingLink: string | null
      consultationNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["consultation"]>
    composites: {}
  }

  type ConsultationGetPayload<S extends boolean | null | undefined | ConsultationDefaultArgs> = $Result.GetResult<Prisma.$ConsultationPayload, S>

  type ConsultationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationCountAggregateInputType | true
    }

  export interface ConsultationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultation'], meta: { name: 'Consultation' } }
    /**
     * Find zero or one Consultation that matches the filter.
     * @param {ConsultationFindUniqueArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationFindUniqueArgs>(args: SelectSubset<T, ConsultationFindUniqueArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationFindUniqueOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationFindFirstArgs>(args?: SelectSubset<T, ConsultationFindFirstArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultations
     * const consultations = await prisma.consultation.findMany()
     * 
     * // Get first 10 Consultations
     * const consultations = await prisma.consultation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationWithIdOnly = await prisma.consultation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationFindManyArgs>(args?: SelectSubset<T, ConsultationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultation.
     * @param {ConsultationCreateArgs} args - Arguments to create a Consultation.
     * @example
     * // Create one Consultation
     * const Consultation = await prisma.consultation.create({
     *   data: {
     *     // ... data to create a Consultation
     *   }
     * })
     * 
     */
    create<T extends ConsultationCreateArgs>(args: SelectSubset<T, ConsultationCreateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultations.
     * @param {ConsultationCreateManyArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationCreateManyArgs>(args?: SelectSubset<T, ConsultationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultations and returns the data saved in the database.
     * @param {ConsultationCreateManyAndReturnArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consultation.
     * @param {ConsultationDeleteArgs} args - Arguments to delete one Consultation.
     * @example
     * // Delete one Consultation
     * const Consultation = await prisma.consultation.delete({
     *   where: {
     *     // ... filter to delete one Consultation
     *   }
     * })
     * 
     */
    delete<T extends ConsultationDeleteArgs>(args: SelectSubset<T, ConsultationDeleteArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultation.
     * @param {ConsultationUpdateArgs} args - Arguments to update one Consultation.
     * @example
     * // Update one Consultation
     * const consultation = await prisma.consultation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationUpdateArgs>(args: SelectSubset<T, ConsultationUpdateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultations.
     * @param {ConsultationDeleteManyArgs} args - Arguments to filter Consultations to delete.
     * @example
     * // Delete a few Consultations
     * const { count } = await prisma.consultation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationDeleteManyArgs>(args?: SelectSubset<T, ConsultationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationUpdateManyArgs>(args: SelectSubset<T, ConsultationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations and returns the data updated in the database.
     * @param {ConsultationUpdateManyAndReturnArgs} args - Arguments to update many Consultations.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consultation.
     * @param {ConsultationUpsertArgs} args - Arguments to update or create a Consultation.
     * @example
     * // Update or create a Consultation
     * const consultation = await prisma.consultation.upsert({
     *   create: {
     *     // ... data to create a Consultation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultation we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationUpsertArgs>(args: SelectSubset<T, ConsultationUpsertArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCountArgs} args - Arguments to filter Consultations to count.
     * @example
     * // Count the number of Consultations
     * const count = await prisma.consultation.count({
     *   where: {
     *     // ... the filter for the Consultations we want to count
     *   }
     * })
    **/
    count<T extends ConsultationCountArgs>(
      args?: Subset<T, ConsultationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationAggregateArgs>(args: Subset<T, ConsultationAggregateArgs>): Prisma.PrismaPromise<GetConsultationAggregateType<T>>

    /**
     * Group by Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultation model
   */
  readonly fields: ConsultationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescriptions<T extends Consultation$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Consultation$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consultation model
   */
  interface ConsultationFieldRefs {
    readonly id: FieldRef<"Consultation", 'String'>
    readonly patientId: FieldRef<"Consultation", 'String'>
    readonly providerId: FieldRef<"Consultation", 'String'>
    readonly consultationDate: FieldRef<"Consultation", 'DateTime'>
    readonly consultationTime: FieldRef<"Consultation", 'DateTime'>
    readonly consultationStatus: FieldRef<"Consultation", 'ConsultationStatus'>
    readonly consultationType: FieldRef<"Consultation", 'ConsultationType'>
    readonly meetingLink: FieldRef<"Consultation", 'String'>
    readonly consultationNotes: FieldRef<"Consultation", 'String'>
    readonly createdAt: FieldRef<"Consultation", 'DateTime'>
    readonly updatedAt: FieldRef<"Consultation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consultation findUnique
   */
  export type ConsultationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findUniqueOrThrow
   */
  export type ConsultationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findFirst
   */
  export type ConsultationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findFirstOrThrow
   */
  export type ConsultationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findMany
   */
  export type ConsultationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation create
   */
  export type ConsultationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The data needed to create a Consultation.
     */
    data: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
  }

  /**
   * Consultation createMany
   */
  export type ConsultationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationCreateManyInput | ConsultationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consultation createManyAndReturn
   */
  export type ConsultationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationCreateManyInput | ConsultationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultation update
   */
  export type ConsultationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The data needed to update a Consultation.
     */
    data: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
    /**
     * Choose, which Consultation to update.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation updateMany
   */
  export type ConsultationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
  }

  /**
   * Consultation updateManyAndReturn
   */
  export type ConsultationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultation upsert
   */
  export type ConsultationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The filter to search for the Consultation to update in case it exists.
     */
    where: ConsultationWhereUniqueInput
    /**
     * In case the Consultation found by the `where` argument doesn't exist, create a new Consultation with this data.
     */
    create: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
    /**
     * In case the Consultation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
  }

  /**
   * Consultation delete
   */
  export type ConsultationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter which Consultation to delete.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation deleteMany
   */
  export type ConsultationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultations to delete
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to delete.
     */
    limit?: number
  }

  /**
   * Consultation.prescriptions
   */
  export type Consultation$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Consultation without action
   */
  export type ConsultationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: string | null
    consultationId: string | null
    medicineName: string | null
    dosage: string | null
    frequency: string | null
    duration: string | null
    instructions: string | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null
    consultationId: string | null
    medicineName: string | null
    dosage: string | null
    frequency: string | null
    duration: string | null
    instructions: string | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    consultationId: number
    medicineName: number
    dosage: number
    frequency: number
    duration: number
    instructions: number
    _all: number
  }


  export type PrescriptionMinAggregateInputType = {
    id?: true
    consultationId?: true
    medicineName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    consultationId?: true
    medicineName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    consultationId?: true
    medicineName?: true
    dosage?: true
    frequency?: true
    duration?: true
    instructions?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: string
    consultationId: string | null
    medicineName: string
    dosage: string | null
    frequency: string | null
    duration: string | null
    instructions: string | null
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultationId?: boolean
    medicineName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultationId?: boolean
    medicineName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultationId?: boolean
    medicineName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    consultationId?: boolean
    medicineName?: boolean
    dosage?: boolean
    frequency?: boolean
    duration?: boolean
    instructions?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consultationId" | "medicineName" | "dosage" | "frequency" | "duration" | "instructions", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      consultation: Prisma.$ConsultationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      consultationId: string | null
      medicineName: string
      dosage: string | null
      frequency: string | null
      duration: string | null
      instructions: string | null
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultation<T extends Prescription$consultationArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$consultationArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'String'>
    readonly consultationId: FieldRef<"Prescription", 'String'>
    readonly medicineName: FieldRef<"Prescription", 'String'>
    readonly dosage: FieldRef<"Prescription", 'String'>
    readonly frequency: FieldRef<"Prescription", 'String'>
    readonly duration: FieldRef<"Prescription", 'String'>
    readonly instructions: FieldRef<"Prescription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription.consultation
   */
  export type Prescription$consultationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    where?: ConsultationWhereInput
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model HealthReading
   */

  export type AggregateHealthReading = {
    _count: HealthReadingCountAggregateOutputType | null
    _avg: HealthReadingAvgAggregateOutputType | null
    _sum: HealthReadingSumAggregateOutputType | null
    _min: HealthReadingMinAggregateOutputType | null
    _max: HealthReadingMaxAggregateOutputType | null
  }

  export type HealthReadingAvgAggregateOutputType = {
    heartRate: number | null
    temperature: Decimal | null
    bloodGlucose: Decimal | null
    weight: Decimal | null
  }

  export type HealthReadingSumAggregateOutputType = {
    heartRate: number | null
    temperature: Decimal | null
    bloodGlucose: Decimal | null
    weight: Decimal | null
  }

  export type HealthReadingMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    bloodPressure: string | null
    heartRate: number | null
    temperature: Decimal | null
    bloodGlucose: Decimal | null
    weight: Decimal | null
    timestamp: Date | null
  }

  export type HealthReadingMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    bloodPressure: string | null
    heartRate: number | null
    temperature: Decimal | null
    bloodGlucose: Decimal | null
    weight: Decimal | null
    timestamp: Date | null
  }

  export type HealthReadingCountAggregateOutputType = {
    id: number
    patientId: number
    bloodPressure: number
    heartRate: number
    temperature: number
    bloodGlucose: number
    weight: number
    timestamp: number
    _all: number
  }


  export type HealthReadingAvgAggregateInputType = {
    heartRate?: true
    temperature?: true
    bloodGlucose?: true
    weight?: true
  }

  export type HealthReadingSumAggregateInputType = {
    heartRate?: true
    temperature?: true
    bloodGlucose?: true
    weight?: true
  }

  export type HealthReadingMinAggregateInputType = {
    id?: true
    patientId?: true
    bloodPressure?: true
    heartRate?: true
    temperature?: true
    bloodGlucose?: true
    weight?: true
    timestamp?: true
  }

  export type HealthReadingMaxAggregateInputType = {
    id?: true
    patientId?: true
    bloodPressure?: true
    heartRate?: true
    temperature?: true
    bloodGlucose?: true
    weight?: true
    timestamp?: true
  }

  export type HealthReadingCountAggregateInputType = {
    id?: true
    patientId?: true
    bloodPressure?: true
    heartRate?: true
    temperature?: true
    bloodGlucose?: true
    weight?: true
    timestamp?: true
    _all?: true
  }

  export type HealthReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthReading to aggregate.
     */
    where?: HealthReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthReadings to fetch.
     */
    orderBy?: HealthReadingOrderByWithRelationInput | HealthReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthReadings
    **/
    _count?: true | HealthReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HealthReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HealthReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthReadingMaxAggregateInputType
  }

  export type GetHealthReadingAggregateType<T extends HealthReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthReading[P]>
      : GetScalarType<T[P], AggregateHealthReading[P]>
  }




  export type HealthReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthReadingWhereInput
    orderBy?: HealthReadingOrderByWithAggregationInput | HealthReadingOrderByWithAggregationInput[]
    by: HealthReadingScalarFieldEnum[] | HealthReadingScalarFieldEnum
    having?: HealthReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthReadingCountAggregateInputType | true
    _avg?: HealthReadingAvgAggregateInputType
    _sum?: HealthReadingSumAggregateInputType
    _min?: HealthReadingMinAggregateInputType
    _max?: HealthReadingMaxAggregateInputType
  }

  export type HealthReadingGroupByOutputType = {
    id: string
    patientId: string
    bloodPressure: string | null
    heartRate: number | null
    temperature: Decimal | null
    bloodGlucose: Decimal | null
    weight: Decimal | null
    timestamp: Date
    _count: HealthReadingCountAggregateOutputType | null
    _avg: HealthReadingAvgAggregateOutputType | null
    _sum: HealthReadingSumAggregateOutputType | null
    _min: HealthReadingMinAggregateOutputType | null
    _max: HealthReadingMaxAggregateOutputType | null
  }

  type GetHealthReadingGroupByPayload<T extends HealthReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthReadingGroupByOutputType[P]>
            : GetScalarType<T[P], HealthReadingGroupByOutputType[P]>
        }
      >
    >


  export type HealthReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    temperature?: boolean
    bloodGlucose?: boolean
    weight?: boolean
    timestamp?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthReading"]>

  export type HealthReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    temperature?: boolean
    bloodGlucose?: boolean
    weight?: boolean
    timestamp?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthReading"]>

  export type HealthReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    temperature?: boolean
    bloodGlucose?: boolean
    weight?: boolean
    timestamp?: boolean
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["healthReading"]>

  export type HealthReadingSelectScalar = {
    id?: boolean
    patientId?: boolean
    bloodPressure?: boolean
    heartRate?: boolean
    temperature?: boolean
    bloodGlucose?: boolean
    weight?: boolean
    timestamp?: boolean
  }

  export type HealthReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "bloodPressure" | "heartRate" | "temperature" | "bloodGlucose" | "weight" | "timestamp", ExtArgs["result"]["healthReading"]>
  export type HealthReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HealthReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HealthReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HealthReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthReading"
    objects: {
      patient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      bloodPressure: string | null
      heartRate: number | null
      temperature: Prisma.Decimal | null
      bloodGlucose: Prisma.Decimal | null
      weight: Prisma.Decimal | null
      timestamp: Date
    }, ExtArgs["result"]["healthReading"]>
    composites: {}
  }

  type HealthReadingGetPayload<S extends boolean | null | undefined | HealthReadingDefaultArgs> = $Result.GetResult<Prisma.$HealthReadingPayload, S>

  type HealthReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthReadingCountAggregateInputType | true
    }

  export interface HealthReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthReading'], meta: { name: 'HealthReading' } }
    /**
     * Find zero or one HealthReading that matches the filter.
     * @param {HealthReadingFindUniqueArgs} args - Arguments to find a HealthReading
     * @example
     * // Get one HealthReading
     * const healthReading = await prisma.healthReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthReadingFindUniqueArgs>(args: SelectSubset<T, HealthReadingFindUniqueArgs<ExtArgs>>): Prisma__HealthReadingClient<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HealthReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthReadingFindUniqueOrThrowArgs} args - Arguments to find a HealthReading
     * @example
     * // Get one HealthReading
     * const healthReading = await prisma.healthReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthReadingClient<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthReadingFindFirstArgs} args - Arguments to find a HealthReading
     * @example
     * // Get one HealthReading
     * const healthReading = await prisma.healthReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthReadingFindFirstArgs>(args?: SelectSubset<T, HealthReadingFindFirstArgs<ExtArgs>>): Prisma__HealthReadingClient<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthReadingFindFirstOrThrowArgs} args - Arguments to find a HealthReading
     * @example
     * // Get one HealthReading
     * const healthReading = await prisma.healthReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthReadingClient<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HealthReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthReadings
     * const healthReadings = await prisma.healthReading.findMany()
     * 
     * // Get first 10 HealthReadings
     * const healthReadings = await prisma.healthReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthReadingWithIdOnly = await prisma.healthReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthReadingFindManyArgs>(args?: SelectSubset<T, HealthReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HealthReading.
     * @param {HealthReadingCreateArgs} args - Arguments to create a HealthReading.
     * @example
     * // Create one HealthReading
     * const HealthReading = await prisma.healthReading.create({
     *   data: {
     *     // ... data to create a HealthReading
     *   }
     * })
     * 
     */
    create<T extends HealthReadingCreateArgs>(args: SelectSubset<T, HealthReadingCreateArgs<ExtArgs>>): Prisma__HealthReadingClient<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HealthReadings.
     * @param {HealthReadingCreateManyArgs} args - Arguments to create many HealthReadings.
     * @example
     * // Create many HealthReadings
     * const healthReading = await prisma.healthReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthReadingCreateManyArgs>(args?: SelectSubset<T, HealthReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HealthReadings and returns the data saved in the database.
     * @param {HealthReadingCreateManyAndReturnArgs} args - Arguments to create many HealthReadings.
     * @example
     * // Create many HealthReadings
     * const healthReading = await prisma.healthReading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HealthReadings and only return the `id`
     * const healthReadingWithIdOnly = await prisma.healthReading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HealthReading.
     * @param {HealthReadingDeleteArgs} args - Arguments to delete one HealthReading.
     * @example
     * // Delete one HealthReading
     * const HealthReading = await prisma.healthReading.delete({
     *   where: {
     *     // ... filter to delete one HealthReading
     *   }
     * })
     * 
     */
    delete<T extends HealthReadingDeleteArgs>(args: SelectSubset<T, HealthReadingDeleteArgs<ExtArgs>>): Prisma__HealthReadingClient<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HealthReading.
     * @param {HealthReadingUpdateArgs} args - Arguments to update one HealthReading.
     * @example
     * // Update one HealthReading
     * const healthReading = await prisma.healthReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthReadingUpdateArgs>(args: SelectSubset<T, HealthReadingUpdateArgs<ExtArgs>>): Prisma__HealthReadingClient<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HealthReadings.
     * @param {HealthReadingDeleteManyArgs} args - Arguments to filter HealthReadings to delete.
     * @example
     * // Delete a few HealthReadings
     * const { count } = await prisma.healthReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthReadingDeleteManyArgs>(args?: SelectSubset<T, HealthReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthReadings
     * const healthReading = await prisma.healthReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthReadingUpdateManyArgs>(args: SelectSubset<T, HealthReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthReadings and returns the data updated in the database.
     * @param {HealthReadingUpdateManyAndReturnArgs} args - Arguments to update many HealthReadings.
     * @example
     * // Update many HealthReadings
     * const healthReading = await prisma.healthReading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HealthReadings and only return the `id`
     * const healthReadingWithIdOnly = await prisma.healthReading.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HealthReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HealthReading.
     * @param {HealthReadingUpsertArgs} args - Arguments to update or create a HealthReading.
     * @example
     * // Update or create a HealthReading
     * const healthReading = await prisma.healthReading.upsert({
     *   create: {
     *     // ... data to create a HealthReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthReading we want to update
     *   }
     * })
     */
    upsert<T extends HealthReadingUpsertArgs>(args: SelectSubset<T, HealthReadingUpsertArgs<ExtArgs>>): Prisma__HealthReadingClient<$Result.GetResult<Prisma.$HealthReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HealthReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthReadingCountArgs} args - Arguments to filter HealthReadings to count.
     * @example
     * // Count the number of HealthReadings
     * const count = await prisma.healthReading.count({
     *   where: {
     *     // ... the filter for the HealthReadings we want to count
     *   }
     * })
    **/
    count<T extends HealthReadingCountArgs>(
      args?: Subset<T, HealthReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HealthReadingAggregateArgs>(args: Subset<T, HealthReadingAggregateArgs>): Prisma.PrismaPromise<GetHealthReadingAggregateType<T>>

    /**
     * Group by HealthReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HealthReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthReadingGroupByArgs['orderBy'] }
        : { orderBy?: HealthReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HealthReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthReading model
   */
  readonly fields: HealthReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HealthReading model
   */
  interface HealthReadingFieldRefs {
    readonly id: FieldRef<"HealthReading", 'String'>
    readonly patientId: FieldRef<"HealthReading", 'String'>
    readonly bloodPressure: FieldRef<"HealthReading", 'String'>
    readonly heartRate: FieldRef<"HealthReading", 'Int'>
    readonly temperature: FieldRef<"HealthReading", 'Decimal'>
    readonly bloodGlucose: FieldRef<"HealthReading", 'Decimal'>
    readonly weight: FieldRef<"HealthReading", 'Decimal'>
    readonly timestamp: FieldRef<"HealthReading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HealthReading findUnique
   */
  export type HealthReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    /**
     * Filter, which HealthReading to fetch.
     */
    where: HealthReadingWhereUniqueInput
  }

  /**
   * HealthReading findUniqueOrThrow
   */
  export type HealthReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    /**
     * Filter, which HealthReading to fetch.
     */
    where: HealthReadingWhereUniqueInput
  }

  /**
   * HealthReading findFirst
   */
  export type HealthReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    /**
     * Filter, which HealthReading to fetch.
     */
    where?: HealthReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthReadings to fetch.
     */
    orderBy?: HealthReadingOrderByWithRelationInput | HealthReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthReadings.
     */
    cursor?: HealthReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthReadings.
     */
    distinct?: HealthReadingScalarFieldEnum | HealthReadingScalarFieldEnum[]
  }

  /**
   * HealthReading findFirstOrThrow
   */
  export type HealthReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    /**
     * Filter, which HealthReading to fetch.
     */
    where?: HealthReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthReadings to fetch.
     */
    orderBy?: HealthReadingOrderByWithRelationInput | HealthReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthReadings.
     */
    cursor?: HealthReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthReadings.
     */
    distinct?: HealthReadingScalarFieldEnum | HealthReadingScalarFieldEnum[]
  }

  /**
   * HealthReading findMany
   */
  export type HealthReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    /**
     * Filter, which HealthReadings to fetch.
     */
    where?: HealthReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthReadings to fetch.
     */
    orderBy?: HealthReadingOrderByWithRelationInput | HealthReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthReadings.
     */
    cursor?: HealthReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthReadings.
     */
    distinct?: HealthReadingScalarFieldEnum | HealthReadingScalarFieldEnum[]
  }

  /**
   * HealthReading create
   */
  export type HealthReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a HealthReading.
     */
    data: XOR<HealthReadingCreateInput, HealthReadingUncheckedCreateInput>
  }

  /**
   * HealthReading createMany
   */
  export type HealthReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthReadings.
     */
    data: HealthReadingCreateManyInput | HealthReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthReading createManyAndReturn
   */
  export type HealthReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * The data used to create many HealthReadings.
     */
    data: HealthReadingCreateManyInput | HealthReadingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthReading update
   */
  export type HealthReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a HealthReading.
     */
    data: XOR<HealthReadingUpdateInput, HealthReadingUncheckedUpdateInput>
    /**
     * Choose, which HealthReading to update.
     */
    where: HealthReadingWhereUniqueInput
  }

  /**
   * HealthReading updateMany
   */
  export type HealthReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthReadings.
     */
    data: XOR<HealthReadingUpdateManyMutationInput, HealthReadingUncheckedUpdateManyInput>
    /**
     * Filter which HealthReadings to update
     */
    where?: HealthReadingWhereInput
    /**
     * Limit how many HealthReadings to update.
     */
    limit?: number
  }

  /**
   * HealthReading updateManyAndReturn
   */
  export type HealthReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * The data used to update HealthReadings.
     */
    data: XOR<HealthReadingUpdateManyMutationInput, HealthReadingUncheckedUpdateManyInput>
    /**
     * Filter which HealthReadings to update
     */
    where?: HealthReadingWhereInput
    /**
     * Limit how many HealthReadings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HealthReading upsert
   */
  export type HealthReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the HealthReading to update in case it exists.
     */
    where: HealthReadingWhereUniqueInput
    /**
     * In case the HealthReading found by the `where` argument doesn't exist, create a new HealthReading with this data.
     */
    create: XOR<HealthReadingCreateInput, HealthReadingUncheckedCreateInput>
    /**
     * In case the HealthReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthReadingUpdateInput, HealthReadingUncheckedUpdateInput>
  }

  /**
   * HealthReading delete
   */
  export type HealthReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
    /**
     * Filter which HealthReading to delete.
     */
    where: HealthReadingWhereUniqueInput
  }

  /**
   * HealthReading deleteMany
   */
  export type HealthReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthReadings to delete
     */
    where?: HealthReadingWhereInput
    /**
     * Limit how many HealthReadings to delete.
     */
    limit?: number
  }

  /**
   * HealthReading without action
   */
  export type HealthReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthReading
     */
    select?: HealthReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthReading
     */
    omit?: HealthReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HealthReadingInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    messageText: string | null
    fileUrl: string | null
    timestamp: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    messageText: string | null
    fileUrl: string | null
    timestamp: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    messageText: number
    fileUrl: number
    timestamp: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    messageText?: true
    fileUrl?: true
    timestamp?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    messageText?: true
    fileUrl?: true
    timestamp?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    messageText?: true
    fileUrl?: true
    timestamp?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    messageText: string | null
    fileUrl: string | null
    timestamp: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    messageText?: boolean
    fileUrl?: boolean
    timestamp?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    messageText?: boolean
    fileUrl?: boolean
    timestamp?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    messageText?: boolean
    fileUrl?: boolean
    timestamp?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    messageText?: boolean
    fileUrl?: boolean
    timestamp?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "messageText" | "fileUrl" | "timestamp", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      messageText: string | null
      fileUrl: string | null
      timestamp: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly messageText: FieldRef<"Message", 'String'>
    readonly fileUrl: FieldRef<"Message", 'String'>
    readonly timestamp: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    senderId: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    senderId: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    senderId: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    senderId?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    senderId?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    senderId?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    senderId: string | null
    message: string
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    senderId?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    senderId?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    senderId?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    senderId?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "senderId" | "message" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      /**
       * Only used for `new_message` notifications so we can dedupe by sender.
       */
      senderId: string | null
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly senderId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialization: 'specialization',
    yearsExperience: 'yearsExperience',
    consultationFee: 'consultationFee',
    profileDescription: 'profileDescription',
    availabilitySchedule: 'availabilitySchedule',
    licenseUrl: 'licenseUrl',
    verificationStatus: 'verificationStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const PharmacyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pharmacyName: 'pharmacyName',
    location: 'location',
    contactInfo: 'contactInfo',
    licenseUrl: 'licenseUrl',
    verificationStatus: 'verificationStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const PharmacyMedicineScalarFieldEnum: {
    id: 'id',
    pharmacyId: 'pharmacyId',
    medicineName: 'medicineName',
    genericName: 'genericName',
    quantity: 'quantity',
    availabilityStatus: 'availabilityStatus',
    updatedAt: 'updatedAt'
  };

  export type PharmacyMedicineScalarFieldEnum = (typeof PharmacyMedicineScalarFieldEnum)[keyof typeof PharmacyMedicineScalarFieldEnum]


  export const ConsultationScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    providerId: 'providerId',
    consultationDate: 'consultationDate',
    consultationTime: 'consultationTime',
    consultationStatus: 'consultationStatus',
    consultationType: 'consultationType',
    meetingLink: 'meetingLink',
    consultationNotes: 'consultationNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConsultationScalarFieldEnum = (typeof ConsultationScalarFieldEnum)[keyof typeof ConsultationScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    consultationId: 'consultationId',
    medicineName: 'medicineName',
    dosage: 'dosage',
    frequency: 'frequency',
    duration: 'duration',
    instructions: 'instructions'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const HealthReadingScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    bloodPressure: 'bloodPressure',
    heartRate: 'heartRate',
    temperature: 'temperature',
    bloodGlucose: 'bloodGlucose',
    weight: 'weight',
    timestamp: 'timestamp'
  };

  export type HealthReadingScalarFieldEnum = (typeof HealthReadingScalarFieldEnum)[keyof typeof HealthReadingScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    messageText: 'messageText',
    fileUrl: 'fileUrl',
    timestamp: 'timestamp'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    senderId: 'senderId',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ConsultationStatus'
   */
  export type EnumConsultationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationStatus'>
    


  /**
   * Reference to a field of type 'ConsultationStatus[]'
   */
  export type ListEnumConsultationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationStatus[]'>
    


  /**
   * Reference to a field of type 'ConsultationType'
   */
  export type EnumConsultationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationType'>
    


  /**
   * Reference to a field of type 'ConsultationType[]'
   */
  export type ListEnumConsultationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    notifications?: NotificationListRelationFilter
    healthReadings?: HealthReadingListRelationFilter
    patientConsultations?: ConsultationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    pharmacy?: PharmacyOrderByWithRelationInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    healthReadings?: HealthReadingOrderByRelationAggregateInput
    patientConsultations?: ConsultationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    notifications?: NotificationListRelationFilter
    healthReadings?: HealthReadingListRelationFilter
    patientConsultations?: ConsultationListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: UuidFilter<"Provider"> | string
    userId?: UuidFilter<"Provider"> | string
    specialization?: StringNullableFilter<"Provider"> | string | null
    yearsExperience?: IntNullableFilter<"Provider"> | number | null
    consultationFee?: DecimalNullableFilter<"Provider"> | Decimal | DecimalJsLike | number | string | null
    profileDescription?: StringNullableFilter<"Provider"> | string | null
    availabilitySchedule?: JsonNullableFilter<"Provider">
    licenseUrl?: StringNullableFilter<"Provider"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"Provider"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    consultations?: ConsultationListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrderInput | SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    profileDescription?: SortOrderInput | SortOrder
    availabilitySchedule?: SortOrderInput | SortOrder
    licenseUrl?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    consultations?: ConsultationOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    specialization?: StringNullableFilter<"Provider"> | string | null
    yearsExperience?: IntNullableFilter<"Provider"> | number | null
    consultationFee?: DecimalNullableFilter<"Provider"> | Decimal | DecimalJsLike | number | string | null
    profileDescription?: StringNullableFilter<"Provider"> | string | null
    availabilitySchedule?: JsonNullableFilter<"Provider">
    licenseUrl?: StringNullableFilter<"Provider"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"Provider"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    consultations?: ConsultationListRelationFilter
  }, "id" | "userId">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrderInput | SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    profileDescription?: SortOrderInput | SortOrder
    availabilitySchedule?: SortOrderInput | SortOrder
    licenseUrl?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _avg?: ProviderAvgOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
    _sum?: ProviderSumOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Provider"> | string
    userId?: UuidWithAggregatesFilter<"Provider"> | string
    specialization?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    yearsExperience?: IntNullableWithAggregatesFilter<"Provider"> | number | null
    consultationFee?: DecimalNullableWithAggregatesFilter<"Provider"> | Decimal | DecimalJsLike | number | string | null
    profileDescription?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    availabilitySchedule?: JsonNullableWithAggregatesFilter<"Provider">
    licenseUrl?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"Provider"> | $Enums.VerificationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type PharmacyWhereInput = {
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    id?: UuidFilter<"Pharmacy"> | string
    userId?: UuidFilter<"Pharmacy"> | string
    pharmacyName?: StringFilter<"Pharmacy"> | string
    location?: StringNullableFilter<"Pharmacy"> | string | null
    contactInfo?: StringNullableFilter<"Pharmacy"> | string | null
    licenseUrl?: StringNullableFilter<"Pharmacy"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"Pharmacy"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"Pharmacy"> | Date | string
    updatedAt?: DateTimeFilter<"Pharmacy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medicines?: PharmacyMedicineListRelationFilter
  }

  export type PharmacyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pharmacyName?: SortOrder
    location?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    licenseUrl?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    medicines?: PharmacyMedicineOrderByRelationAggregateInput
  }

  export type PharmacyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    pharmacyName?: StringFilter<"Pharmacy"> | string
    location?: StringNullableFilter<"Pharmacy"> | string | null
    contactInfo?: StringNullableFilter<"Pharmacy"> | string | null
    licenseUrl?: StringNullableFilter<"Pharmacy"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"Pharmacy"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"Pharmacy"> | Date | string
    updatedAt?: DateTimeFilter<"Pharmacy"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    medicines?: PharmacyMedicineListRelationFilter
  }, "id" | "userId">

  export type PharmacyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pharmacyName?: SortOrder
    location?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    licenseUrl?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    OR?: PharmacyScalarWhereWithAggregatesInput[]
    NOT?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Pharmacy"> | string
    userId?: UuidWithAggregatesFilter<"Pharmacy"> | string
    pharmacyName?: StringWithAggregatesFilter<"Pharmacy"> | string
    location?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    contactInfo?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    licenseUrl?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"Pharmacy"> | $Enums.VerificationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
  }

  export type PharmacyMedicineWhereInput = {
    AND?: PharmacyMedicineWhereInput | PharmacyMedicineWhereInput[]
    OR?: PharmacyMedicineWhereInput[]
    NOT?: PharmacyMedicineWhereInput | PharmacyMedicineWhereInput[]
    id?: UuidFilter<"PharmacyMedicine"> | string
    pharmacyId?: UuidFilter<"PharmacyMedicine"> | string
    medicineName?: StringFilter<"PharmacyMedicine"> | string
    genericName?: StringNullableFilter<"PharmacyMedicine"> | string | null
    quantity?: IntFilter<"PharmacyMedicine"> | number
    availabilityStatus?: BoolFilter<"PharmacyMedicine"> | boolean
    updatedAt?: DateTimeFilter<"PharmacyMedicine"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
  }

  export type PharmacyMedicineOrderByWithRelationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineName?: SortOrder
    genericName?: SortOrderInput | SortOrder
    quantity?: SortOrder
    availabilityStatus?: SortOrder
    updatedAt?: SortOrder
    pharmacy?: PharmacyOrderByWithRelationInput
  }

  export type PharmacyMedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PharmacyMedicineWhereInput | PharmacyMedicineWhereInput[]
    OR?: PharmacyMedicineWhereInput[]
    NOT?: PharmacyMedicineWhereInput | PharmacyMedicineWhereInput[]
    pharmacyId?: UuidFilter<"PharmacyMedicine"> | string
    medicineName?: StringFilter<"PharmacyMedicine"> | string
    genericName?: StringNullableFilter<"PharmacyMedicine"> | string | null
    quantity?: IntFilter<"PharmacyMedicine"> | number
    availabilityStatus?: BoolFilter<"PharmacyMedicine"> | boolean
    updatedAt?: DateTimeFilter<"PharmacyMedicine"> | Date | string
    pharmacy?: XOR<PharmacyScalarRelationFilter, PharmacyWhereInput>
  }, "id">

  export type PharmacyMedicineOrderByWithAggregationInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineName?: SortOrder
    genericName?: SortOrderInput | SortOrder
    quantity?: SortOrder
    availabilityStatus?: SortOrder
    updatedAt?: SortOrder
    _count?: PharmacyMedicineCountOrderByAggregateInput
    _avg?: PharmacyMedicineAvgOrderByAggregateInput
    _max?: PharmacyMedicineMaxOrderByAggregateInput
    _min?: PharmacyMedicineMinOrderByAggregateInput
    _sum?: PharmacyMedicineSumOrderByAggregateInput
  }

  export type PharmacyMedicineScalarWhereWithAggregatesInput = {
    AND?: PharmacyMedicineScalarWhereWithAggregatesInput | PharmacyMedicineScalarWhereWithAggregatesInput[]
    OR?: PharmacyMedicineScalarWhereWithAggregatesInput[]
    NOT?: PharmacyMedicineScalarWhereWithAggregatesInput | PharmacyMedicineScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PharmacyMedicine"> | string
    pharmacyId?: UuidWithAggregatesFilter<"PharmacyMedicine"> | string
    medicineName?: StringWithAggregatesFilter<"PharmacyMedicine"> | string
    genericName?: StringNullableWithAggregatesFilter<"PharmacyMedicine"> | string | null
    quantity?: IntWithAggregatesFilter<"PharmacyMedicine"> | number
    availabilityStatus?: BoolWithAggregatesFilter<"PharmacyMedicine"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"PharmacyMedicine"> | Date | string
  }

  export type ConsultationWhereInput = {
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    id?: UuidFilter<"Consultation"> | string
    patientId?: UuidFilter<"Consultation"> | string
    providerId?: UuidFilter<"Consultation"> | string
    consultationDate?: DateTimeFilter<"Consultation"> | Date | string
    consultationTime?: DateTimeFilter<"Consultation"> | Date | string
    consultationStatus?: EnumConsultationStatusFilter<"Consultation"> | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFilter<"Consultation"> | $Enums.ConsultationType
    meetingLink?: StringNullableFilter<"Consultation"> | string | null
    consultationNotes?: StringNullableFilter<"Consultation"> | string | null
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
    updatedAt?: DateTimeFilter<"Consultation"> | Date | string
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    prescriptions?: PrescriptionListRelationFilter
  }

  export type ConsultationOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    providerId?: SortOrder
    consultationDate?: SortOrder
    consultationTime?: SortOrder
    consultationStatus?: SortOrder
    consultationType?: SortOrder
    meetingLink?: SortOrderInput | SortOrder
    consultationNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: UserOrderByWithRelationInput
    provider?: ProviderOrderByWithRelationInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type ConsultationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    patientId?: UuidFilter<"Consultation"> | string
    providerId?: UuidFilter<"Consultation"> | string
    consultationDate?: DateTimeFilter<"Consultation"> | Date | string
    consultationTime?: DateTimeFilter<"Consultation"> | Date | string
    consultationStatus?: EnumConsultationStatusFilter<"Consultation"> | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFilter<"Consultation"> | $Enums.ConsultationType
    meetingLink?: StringNullableFilter<"Consultation"> | string | null
    consultationNotes?: StringNullableFilter<"Consultation"> | string | null
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
    updatedAt?: DateTimeFilter<"Consultation"> | Date | string
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    prescriptions?: PrescriptionListRelationFilter
  }, "id">

  export type ConsultationOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    providerId?: SortOrder
    consultationDate?: SortOrder
    consultationTime?: SortOrder
    consultationStatus?: SortOrder
    consultationType?: SortOrder
    meetingLink?: SortOrderInput | SortOrder
    consultationNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConsultationCountOrderByAggregateInput
    _max?: ConsultationMaxOrderByAggregateInput
    _min?: ConsultationMinOrderByAggregateInput
  }

  export type ConsultationScalarWhereWithAggregatesInput = {
    AND?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    OR?: ConsultationScalarWhereWithAggregatesInput[]
    NOT?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Consultation"> | string
    patientId?: UuidWithAggregatesFilter<"Consultation"> | string
    providerId?: UuidWithAggregatesFilter<"Consultation"> | string
    consultationDate?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
    consultationTime?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
    consultationStatus?: EnumConsultationStatusWithAggregatesFilter<"Consultation"> | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeWithAggregatesFilter<"Consultation"> | $Enums.ConsultationType
    meetingLink?: StringNullableWithAggregatesFilter<"Consultation"> | string | null
    consultationNotes?: StringNullableWithAggregatesFilter<"Consultation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: UuidFilter<"Prescription"> | string
    consultationId?: UuidNullableFilter<"Prescription"> | string | null
    medicineName?: StringFilter<"Prescription"> | string
    dosage?: StringNullableFilter<"Prescription"> | string | null
    frequency?: StringNullableFilter<"Prescription"> | string | null
    duration?: StringNullableFilter<"Prescription"> | string | null
    instructions?: StringNullableFilter<"Prescription"> | string | null
    consultation?: XOR<ConsultationNullableScalarRelationFilter, ConsultationWhereInput> | null
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    consultationId?: SortOrderInput | SortOrder
    medicineName?: SortOrder
    dosage?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    consultation?: ConsultationOrderByWithRelationInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    consultationId?: UuidNullableFilter<"Prescription"> | string | null
    medicineName?: StringFilter<"Prescription"> | string
    dosage?: StringNullableFilter<"Prescription"> | string | null
    frequency?: StringNullableFilter<"Prescription"> | string | null
    duration?: StringNullableFilter<"Prescription"> | string | null
    instructions?: StringNullableFilter<"Prescription"> | string | null
    consultation?: XOR<ConsultationNullableScalarRelationFilter, ConsultationWhereInput> | null
  }, "id">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    consultationId?: SortOrderInput | SortOrder
    medicineName?: SortOrder
    dosage?: SortOrderInput | SortOrder
    frequency?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Prescription"> | string
    consultationId?: UuidNullableWithAggregatesFilter<"Prescription"> | string | null
    medicineName?: StringWithAggregatesFilter<"Prescription"> | string
    dosage?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    frequency?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    duration?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    instructions?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
  }

  export type HealthReadingWhereInput = {
    AND?: HealthReadingWhereInput | HealthReadingWhereInput[]
    OR?: HealthReadingWhereInput[]
    NOT?: HealthReadingWhereInput | HealthReadingWhereInput[]
    id?: UuidFilter<"HealthReading"> | string
    patientId?: UuidFilter<"HealthReading"> | string
    bloodPressure?: StringNullableFilter<"HealthReading"> | string | null
    heartRate?: IntNullableFilter<"HealthReading"> | number | null
    temperature?: DecimalNullableFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: DecimalNullableFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFilter<"HealthReading"> | Date | string
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HealthReadingOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    heartRate?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    bloodGlucose?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    patient?: UserOrderByWithRelationInput
  }

  export type HealthReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HealthReadingWhereInput | HealthReadingWhereInput[]
    OR?: HealthReadingWhereInput[]
    NOT?: HealthReadingWhereInput | HealthReadingWhereInput[]
    patientId?: UuidFilter<"HealthReading"> | string
    bloodPressure?: StringNullableFilter<"HealthReading"> | string | null
    heartRate?: IntNullableFilter<"HealthReading"> | number | null
    temperature?: DecimalNullableFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: DecimalNullableFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFilter<"HealthReading"> | Date | string
    patient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HealthReadingOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodPressure?: SortOrderInput | SortOrder
    heartRate?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    bloodGlucose?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: HealthReadingCountOrderByAggregateInput
    _avg?: HealthReadingAvgOrderByAggregateInput
    _max?: HealthReadingMaxOrderByAggregateInput
    _min?: HealthReadingMinOrderByAggregateInput
    _sum?: HealthReadingSumOrderByAggregateInput
  }

  export type HealthReadingScalarWhereWithAggregatesInput = {
    AND?: HealthReadingScalarWhereWithAggregatesInput | HealthReadingScalarWhereWithAggregatesInput[]
    OR?: HealthReadingScalarWhereWithAggregatesInput[]
    NOT?: HealthReadingScalarWhereWithAggregatesInput | HealthReadingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HealthReading"> | string
    patientId?: UuidWithAggregatesFilter<"HealthReading"> | string
    bloodPressure?: StringNullableWithAggregatesFilter<"HealthReading"> | string | null
    heartRate?: IntNullableWithAggregatesFilter<"HealthReading"> | number | null
    temperature?: DecimalNullableWithAggregatesFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: DecimalNullableWithAggregatesFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableWithAggregatesFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeWithAggregatesFilter<"HealthReading"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: UuidFilter<"Message"> | string
    senderId?: UuidFilter<"Message"> | string
    receiverId?: UuidFilter<"Message"> | string
    messageText?: StringNullableFilter<"Message"> | string | null
    fileUrl?: StringNullableFilter<"Message"> | string | null
    timestamp?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageText?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: UuidFilter<"Message"> | string
    receiverId?: UuidFilter<"Message"> | string
    messageText?: StringNullableFilter<"Message"> | string | null
    fileUrl?: StringNullableFilter<"Message"> | string | null
    timestamp?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageText?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Message"> | string
    senderId?: UuidWithAggregatesFilter<"Message"> | string
    receiverId?: UuidWithAggregatesFilter<"Message"> | string
    messageText?: StringNullableWithAggregatesFilter<"Message"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    senderId?: UuidNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    senderId?: SortOrderInput | SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: UuidFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    senderId?: UuidNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    senderId?: SortOrderInput | SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notification"> | string
    userId?: UuidWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    senderId?: UuidNullableWithAggregatesFilter<"Notification"> | string | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingUncheckedCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUncheckedUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateInput = {
    id?: string
    specialization?: string | null
    yearsExperience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    profileDescription?: string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProviderInput
    consultations?: ConsultationCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id?: string
    userId: string
    specialization?: string | null
    yearsExperience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    profileDescription?: string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    consultations?: ConsultationUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profileDescription?: NullableStringFieldUpdateOperationsInput | string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProviderNestedInput
    consultations?: ConsultationUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profileDescription?: NullableStringFieldUpdateOperationsInput | string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultations?: ConsultationUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id?: string
    userId: string
    specialization?: string | null
    yearsExperience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    profileDescription?: string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profileDescription?: NullableStringFieldUpdateOperationsInput | string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profileDescription?: NullableStringFieldUpdateOperationsInput | string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyCreateInput = {
    id?: string
    pharmacyName: string
    location?: string | null
    contactInfo?: string | null
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPharmacyInput
    medicines?: PharmacyMedicineCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateInput = {
    id?: string
    userId: string
    pharmacyName: string
    location?: string | null
    contactInfo?: string | null
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    medicines?: PharmacyMedicineUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPharmacyNestedInput
    medicines?: PharmacyMedicineUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pharmacyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicines?: PharmacyMedicineUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyCreateManyInput = {
    id?: string
    userId: string
    pharmacyName: string
    location?: string | null
    contactInfo?: string | null
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PharmacyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pharmacyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyMedicineCreateInput = {
    id?: string
    medicineName: string
    genericName?: string | null
    quantity?: number
    availabilityStatus?: boolean
    updatedAt?: Date | string
    pharmacy: PharmacyCreateNestedOneWithoutMedicinesInput
  }

  export type PharmacyMedicineUncheckedCreateInput = {
    id?: string
    pharmacyId: string
    medicineName: string
    genericName?: string | null
    quantity?: number
    availabilityStatus?: boolean
    updatedAt?: Date | string
  }

  export type PharmacyMedicineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    availabilityStatus?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneRequiredWithoutMedicinesNestedInput
  }

  export type PharmacyMedicineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    availabilityStatus?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyMedicineCreateManyInput = {
    id?: string
    pharmacyId: string
    medicineName: string
    genericName?: string | null
    quantity?: number
    availabilityStatus?: boolean
    updatedAt?: Date | string
  }

  export type PharmacyMedicineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    availabilityStatus?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyMedicineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyId?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    availabilityStatus?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCreateInput = {
    id?: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: UserCreateNestedOneWithoutPatientConsultationsInput
    provider: ProviderCreateNestedOneWithoutConsultationsInput
    prescriptions?: PrescriptionCreateNestedManyWithoutConsultationInput
  }

  export type ConsultationUncheckedCreateInput = {
    id?: string
    patientId: string
    providerId: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutConsultationInput
  }

  export type ConsultationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutPatientConsultationsNestedInput
    provider?: ProviderUpdateOneRequiredWithoutConsultationsNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutConsultationNestedInput
  }

  export type ConsultationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutConsultationNestedInput
  }

  export type ConsultationCreateManyInput = {
    id?: string
    patientId: string
    providerId: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateInput = {
    id?: string
    medicineName: string
    dosage?: string | null
    frequency?: string | null
    duration?: string | null
    instructions?: string | null
    consultation?: ConsultationCreateNestedOneWithoutPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: string
    consultationId?: string | null
    medicineName: string
    dosage?: string | null
    frequency?: string | null
    duration?: string | null
    instructions?: string | null
  }

  export type PrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    consultation?: ConsultationUpdateOneWithoutPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionCreateManyInput = {
    id?: string
    consultationId?: string | null
    medicineName: string
    dosage?: string | null
    frequency?: string | null
    duration?: string | null
    instructions?: string | null
  }

  export type PrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HealthReadingCreateInput = {
    id?: string
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    timestamp?: Date | string
    patient: UserCreateNestedOneWithoutHealthReadingsInput
  }

  export type HealthReadingUncheckedCreateInput = {
    id?: string
    patientId: string
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    timestamp?: Date | string
  }

  export type HealthReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutHealthReadingsNestedInput
  }

  export type HealthReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthReadingCreateManyInput = {
    id?: string
    patientId: string
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    timestamp?: Date | string
  }

  export type HealthReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    messageText?: string | null
    fileUrl?: string | null
    timestamp?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    messageText?: string | null
    fileUrl?: string | null
    timestamp?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    messageText?: string | null
    fileUrl?: string | null
    timestamp?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    senderId?: string | null
    message: string
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    senderId?: string | null
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    senderId?: string | null
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProviderNullableScalarRelationFilter = {
    is?: ProviderWhereInput | null
    isNot?: ProviderWhereInput | null
  }

  export type PharmacyNullableScalarRelationFilter = {
    is?: PharmacyWhereInput | null
    isNot?: PharmacyWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type HealthReadingListRelationFilter = {
    every?: HealthReadingWhereInput
    some?: HealthReadingWhereInput
    none?: HealthReadingWhereInput
  }

  export type ConsultationListRelationFilter = {
    every?: ConsultationWhereInput
    some?: ConsultationWhereInput
    none?: ConsultationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HealthReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    yearsExperience?: SortOrder
    consultationFee?: SortOrder
    profileDescription?: SortOrder
    availabilitySchedule?: SortOrder
    licenseUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderAvgOrderByAggregateInput = {
    yearsExperience?: SortOrder
    consultationFee?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    yearsExperience?: SortOrder
    consultationFee?: SortOrder
    profileDescription?: SortOrder
    licenseUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    yearsExperience?: SortOrder
    consultationFee?: SortOrder
    profileDescription?: SortOrder
    licenseUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderSumOrderByAggregateInput = {
    yearsExperience?: SortOrder
    consultationFee?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type PharmacyMedicineListRelationFilter = {
    every?: PharmacyMedicineWhereInput
    some?: PharmacyMedicineWhereInput
    none?: PharmacyMedicineWhereInput
  }

  export type PharmacyMedicineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PharmacyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pharmacyName?: SortOrder
    location?: SortOrder
    contactInfo?: SortOrder
    licenseUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pharmacyName?: SortOrder
    location?: SortOrder
    contactInfo?: SortOrder
    licenseUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pharmacyName?: SortOrder
    location?: SortOrder
    contactInfo?: SortOrder
    licenseUrl?: SortOrder
    verificationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PharmacyScalarRelationFilter = {
    is?: PharmacyWhereInput
    isNot?: PharmacyWhereInput
  }

  export type PharmacyMedicineCountOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineName?: SortOrder
    genericName?: SortOrder
    quantity?: SortOrder
    availabilityStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMedicineAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type PharmacyMedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineName?: SortOrder
    genericName?: SortOrder
    quantity?: SortOrder
    availabilityStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMedicineMinOrderByAggregateInput = {
    id?: SortOrder
    pharmacyId?: SortOrder
    medicineName?: SortOrder
    genericName?: SortOrder
    quantity?: SortOrder
    availabilityStatus?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMedicineSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumConsultationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusFilter<$PrismaModel> | $Enums.ConsultationStatus
  }

  export type EnumConsultationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeFilter<$PrismaModel> | $Enums.ConsultationType
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    providerId?: SortOrder
    consultationDate?: SortOrder
    consultationTime?: SortOrder
    consultationStatus?: SortOrder
    consultationType?: SortOrder
    meetingLink?: SortOrder
    consultationNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    providerId?: SortOrder
    consultationDate?: SortOrder
    consultationTime?: SortOrder
    consultationStatus?: SortOrder
    consultationType?: SortOrder
    meetingLink?: SortOrder
    consultationNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    providerId?: SortOrder
    consultationDate?: SortOrder
    consultationTime?: SortOrder
    consultationStatus?: SortOrder
    consultationType?: SortOrder
    meetingLink?: SortOrder
    consultationNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumConsultationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationStatusFilter<$PrismaModel>
    _max?: NestedEnumConsultationStatusFilter<$PrismaModel>
  }

  export type EnumConsultationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationTypeFilter<$PrismaModel>
    _max?: NestedEnumConsultationTypeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type ConsultationNullableScalarRelationFilter = {
    is?: ConsultationWhereInput | null
    isNot?: ConsultationWhereInput | null
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    consultationId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    consultationId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    consultationId?: SortOrder
    medicineName?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    duration?: SortOrder
    instructions?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type HealthReadingCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodPressure?: SortOrder
    heartRate?: SortOrder
    temperature?: SortOrder
    bloodGlucose?: SortOrder
    weight?: SortOrder
    timestamp?: SortOrder
  }

  export type HealthReadingAvgOrderByAggregateInput = {
    heartRate?: SortOrder
    temperature?: SortOrder
    bloodGlucose?: SortOrder
    weight?: SortOrder
  }

  export type HealthReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodPressure?: SortOrder
    heartRate?: SortOrder
    temperature?: SortOrder
    bloodGlucose?: SortOrder
    weight?: SortOrder
    timestamp?: SortOrder
  }

  export type HealthReadingMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    bloodPressure?: SortOrder
    heartRate?: SortOrder
    temperature?: SortOrder
    bloodGlucose?: SortOrder
    weight?: SortOrder
    timestamp?: SortOrder
  }

  export type HealthReadingSumOrderByAggregateInput = {
    heartRate?: SortOrder
    temperature?: SortOrder
    bloodGlucose?: SortOrder
    weight?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageText?: SortOrder
    fileUrl?: SortOrder
    timestamp?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageText?: SortOrder
    fileUrl?: SortOrder
    timestamp?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    messageText?: SortOrder
    fileUrl?: SortOrder
    timestamp?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderCreateNestedOneWithoutUserInput = {
    create?: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserInput
    connect?: ProviderWhereUniqueInput
  }

  export type PharmacyCreateNestedOneWithoutUserInput = {
    create?: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutUserInput
    connect?: PharmacyWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type HealthReadingCreateNestedManyWithoutPatientInput = {
    create?: XOR<HealthReadingCreateWithoutPatientInput, HealthReadingUncheckedCreateWithoutPatientInput> | HealthReadingCreateWithoutPatientInput[] | HealthReadingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthReadingCreateOrConnectWithoutPatientInput | HealthReadingCreateOrConnectWithoutPatientInput[]
    createMany?: HealthReadingCreateManyPatientInputEnvelope
    connect?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
  }

  export type ConsultationCreateNestedManyWithoutPatientInput = {
    create?: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput> | ConsultationCreateWithoutPatientInput[] | ConsultationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutPatientInput | ConsultationCreateOrConnectWithoutPatientInput[]
    createMany?: ConsultationCreateManyPatientInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type ProviderUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserInput
    connect?: ProviderWhereUniqueInput
  }

  export type PharmacyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutUserInput
    connect?: PharmacyWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type HealthReadingUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<HealthReadingCreateWithoutPatientInput, HealthReadingUncheckedCreateWithoutPatientInput> | HealthReadingCreateWithoutPatientInput[] | HealthReadingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthReadingCreateOrConnectWithoutPatientInput | HealthReadingCreateOrConnectWithoutPatientInput[]
    createMany?: HealthReadingCreateManyPatientInputEnvelope
    connect?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
  }

  export type ConsultationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput> | ConsultationCreateWithoutPatientInput[] | ConsultationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutPatientInput | ConsultationCreateOrConnectWithoutPatientInput[]
    createMany?: ConsultationCreateManyPatientInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProviderUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserInput
    upsert?: ProviderUpsertWithoutUserInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutUserInput, ProviderUpdateWithoutUserInput>, ProviderUncheckedUpdateWithoutUserInput>
  }

  export type PharmacyUpdateOneWithoutUserNestedInput = {
    create?: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutUserInput
    upsert?: PharmacyUpsertWithoutUserInput
    disconnect?: PharmacyWhereInput | boolean
    delete?: PharmacyWhereInput | boolean
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutUserInput, PharmacyUpdateWithoutUserInput>, PharmacyUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type HealthReadingUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HealthReadingCreateWithoutPatientInput, HealthReadingUncheckedCreateWithoutPatientInput> | HealthReadingCreateWithoutPatientInput[] | HealthReadingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthReadingCreateOrConnectWithoutPatientInput | HealthReadingCreateOrConnectWithoutPatientInput[]
    upsert?: HealthReadingUpsertWithWhereUniqueWithoutPatientInput | HealthReadingUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HealthReadingCreateManyPatientInputEnvelope
    set?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
    disconnect?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
    delete?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
    connect?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
    update?: HealthReadingUpdateWithWhereUniqueWithoutPatientInput | HealthReadingUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HealthReadingUpdateManyWithWhereWithoutPatientInput | HealthReadingUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HealthReadingScalarWhereInput | HealthReadingScalarWhereInput[]
  }

  export type ConsultationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput> | ConsultationCreateWithoutPatientInput[] | ConsultationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutPatientInput | ConsultationCreateOrConnectWithoutPatientInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutPatientInput | ConsultationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ConsultationCreateManyPatientInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutPatientInput | ConsultationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutPatientInput | ConsultationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type ProviderUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutUserInput
    upsert?: ProviderUpsertWithoutUserInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutUserInput, ProviderUpdateWithoutUserInput>, ProviderUncheckedUpdateWithoutUserInput>
  }

  export type PharmacyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutUserInput
    upsert?: PharmacyUpsertWithoutUserInput
    disconnect?: PharmacyWhereInput | boolean
    delete?: PharmacyWhereInput | boolean
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutUserInput, PharmacyUpdateWithoutUserInput>, PharmacyUncheckedUpdateWithoutUserInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type HealthReadingUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<HealthReadingCreateWithoutPatientInput, HealthReadingUncheckedCreateWithoutPatientInput> | HealthReadingCreateWithoutPatientInput[] | HealthReadingUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: HealthReadingCreateOrConnectWithoutPatientInput | HealthReadingCreateOrConnectWithoutPatientInput[]
    upsert?: HealthReadingUpsertWithWhereUniqueWithoutPatientInput | HealthReadingUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: HealthReadingCreateManyPatientInputEnvelope
    set?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
    disconnect?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
    delete?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
    connect?: HealthReadingWhereUniqueInput | HealthReadingWhereUniqueInput[]
    update?: HealthReadingUpdateWithWhereUniqueWithoutPatientInput | HealthReadingUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: HealthReadingUpdateManyWithWhereWithoutPatientInput | HealthReadingUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: HealthReadingScalarWhereInput | HealthReadingScalarWhereInput[]
  }

  export type ConsultationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput> | ConsultationCreateWithoutPatientInput[] | ConsultationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutPatientInput | ConsultationCreateOrConnectWithoutPatientInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutPatientInput | ConsultationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ConsultationCreateManyPatientInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutPatientInput | ConsultationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutPatientInput | ConsultationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProviderInput = {
    create?: XOR<UserCreateWithoutProviderInput, UserUncheckedCreateWithoutProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutProviderInput
    connect?: UserWhereUniqueInput
  }

  export type ConsultationCreateNestedManyWithoutProviderInput = {
    create?: XOR<ConsultationCreateWithoutProviderInput, ConsultationUncheckedCreateWithoutProviderInput> | ConsultationCreateWithoutProviderInput[] | ConsultationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutProviderInput | ConsultationCreateOrConnectWithoutProviderInput[]
    createMany?: ConsultationCreateManyProviderInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type ConsultationUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ConsultationCreateWithoutProviderInput, ConsultationUncheckedCreateWithoutProviderInput> | ConsultationCreateWithoutProviderInput[] | ConsultationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutProviderInput | ConsultationCreateOrConnectWithoutProviderInput[]
    createMany?: ConsultationCreateManyProviderInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type UserUpdateOneRequiredWithoutProviderNestedInput = {
    create?: XOR<UserCreateWithoutProviderInput, UserUncheckedCreateWithoutProviderInput>
    connectOrCreate?: UserCreateOrConnectWithoutProviderInput
    upsert?: UserUpsertWithoutProviderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProviderInput, UserUpdateWithoutProviderInput>, UserUncheckedUpdateWithoutProviderInput>
  }

  export type ConsultationUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ConsultationCreateWithoutProviderInput, ConsultationUncheckedCreateWithoutProviderInput> | ConsultationCreateWithoutProviderInput[] | ConsultationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutProviderInput | ConsultationCreateOrConnectWithoutProviderInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutProviderInput | ConsultationUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ConsultationCreateManyProviderInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutProviderInput | ConsultationUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutProviderInput | ConsultationUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type ConsultationUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ConsultationCreateWithoutProviderInput, ConsultationUncheckedCreateWithoutProviderInput> | ConsultationCreateWithoutProviderInput[] | ConsultationUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutProviderInput | ConsultationCreateOrConnectWithoutProviderInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutProviderInput | ConsultationUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ConsultationCreateManyProviderInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutProviderInput | ConsultationUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutProviderInput | ConsultationUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPharmacyInput = {
    create?: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPharmacyInput
    connect?: UserWhereUniqueInput
  }

  export type PharmacyMedicineCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<PharmacyMedicineCreateWithoutPharmacyInput, PharmacyMedicineUncheckedCreateWithoutPharmacyInput> | PharmacyMedicineCreateWithoutPharmacyInput[] | PharmacyMedicineUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyMedicineCreateOrConnectWithoutPharmacyInput | PharmacyMedicineCreateOrConnectWithoutPharmacyInput[]
    createMany?: PharmacyMedicineCreateManyPharmacyInputEnvelope
    connect?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
  }

  export type PharmacyMedicineUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<PharmacyMedicineCreateWithoutPharmacyInput, PharmacyMedicineUncheckedCreateWithoutPharmacyInput> | PharmacyMedicineCreateWithoutPharmacyInput[] | PharmacyMedicineUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyMedicineCreateOrConnectWithoutPharmacyInput | PharmacyMedicineCreateOrConnectWithoutPharmacyInput[]
    createMany?: PharmacyMedicineCreateManyPharmacyInputEnvelope
    connect?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPharmacyNestedInput = {
    create?: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
    connectOrCreate?: UserCreateOrConnectWithoutPharmacyInput
    upsert?: UserUpsertWithoutPharmacyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPharmacyInput, UserUpdateWithoutPharmacyInput>, UserUncheckedUpdateWithoutPharmacyInput>
  }

  export type PharmacyMedicineUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<PharmacyMedicineCreateWithoutPharmacyInput, PharmacyMedicineUncheckedCreateWithoutPharmacyInput> | PharmacyMedicineCreateWithoutPharmacyInput[] | PharmacyMedicineUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyMedicineCreateOrConnectWithoutPharmacyInput | PharmacyMedicineCreateOrConnectWithoutPharmacyInput[]
    upsert?: PharmacyMedicineUpsertWithWhereUniqueWithoutPharmacyInput | PharmacyMedicineUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: PharmacyMedicineCreateManyPharmacyInputEnvelope
    set?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
    disconnect?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
    delete?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
    connect?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
    update?: PharmacyMedicineUpdateWithWhereUniqueWithoutPharmacyInput | PharmacyMedicineUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: PharmacyMedicineUpdateManyWithWhereWithoutPharmacyInput | PharmacyMedicineUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: PharmacyMedicineScalarWhereInput | PharmacyMedicineScalarWhereInput[]
  }

  export type PharmacyMedicineUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<PharmacyMedicineCreateWithoutPharmacyInput, PharmacyMedicineUncheckedCreateWithoutPharmacyInput> | PharmacyMedicineCreateWithoutPharmacyInput[] | PharmacyMedicineUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: PharmacyMedicineCreateOrConnectWithoutPharmacyInput | PharmacyMedicineCreateOrConnectWithoutPharmacyInput[]
    upsert?: PharmacyMedicineUpsertWithWhereUniqueWithoutPharmacyInput | PharmacyMedicineUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: PharmacyMedicineCreateManyPharmacyInputEnvelope
    set?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
    disconnect?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
    delete?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
    connect?: PharmacyMedicineWhereUniqueInput | PharmacyMedicineWhereUniqueInput[]
    update?: PharmacyMedicineUpdateWithWhereUniqueWithoutPharmacyInput | PharmacyMedicineUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: PharmacyMedicineUpdateManyWithWhereWithoutPharmacyInput | PharmacyMedicineUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: PharmacyMedicineScalarWhereInput | PharmacyMedicineScalarWhereInput[]
  }

  export type PharmacyCreateNestedOneWithoutMedicinesInput = {
    create?: XOR<PharmacyCreateWithoutMedicinesInput, PharmacyUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutMedicinesInput
    connect?: PharmacyWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PharmacyUpdateOneRequiredWithoutMedicinesNestedInput = {
    create?: XOR<PharmacyCreateWithoutMedicinesInput, PharmacyUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutMedicinesInput
    upsert?: PharmacyUpsertWithoutMedicinesInput
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutMedicinesInput, PharmacyUpdateWithoutMedicinesInput>, PharmacyUncheckedUpdateWithoutMedicinesInput>
  }

  export type UserCreateNestedOneWithoutPatientConsultationsInput = {
    create?: XOR<UserCreateWithoutPatientConsultationsInput, UserUncheckedCreateWithoutPatientConsultationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientConsultationsInput
    connect?: UserWhereUniqueInput
  }

  export type ProviderCreateNestedOneWithoutConsultationsInput = {
    create?: XOR<ProviderCreateWithoutConsultationsInput, ProviderUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutConsultationsInput
    connect?: ProviderWhereUniqueInput
  }

  export type PrescriptionCreateNestedManyWithoutConsultationInput = {
    create?: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput> | PrescriptionCreateWithoutConsultationInput[] | PrescriptionUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutConsultationInput | PrescriptionCreateOrConnectWithoutConsultationInput[]
    createMany?: PrescriptionCreateManyConsultationInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutConsultationInput = {
    create?: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput> | PrescriptionCreateWithoutConsultationInput[] | PrescriptionUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutConsultationInput | PrescriptionCreateOrConnectWithoutConsultationInput[]
    createMany?: PrescriptionCreateManyConsultationInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type EnumConsultationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConsultationStatus
  }

  export type EnumConsultationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConsultationType
  }

  export type UserUpdateOneRequiredWithoutPatientConsultationsNestedInput = {
    create?: XOR<UserCreateWithoutPatientConsultationsInput, UserUncheckedCreateWithoutPatientConsultationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientConsultationsInput
    upsert?: UserUpsertWithoutPatientConsultationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientConsultationsInput, UserUpdateWithoutPatientConsultationsInput>, UserUncheckedUpdateWithoutPatientConsultationsInput>
  }

  export type ProviderUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: XOR<ProviderCreateWithoutConsultationsInput, ProviderUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutConsultationsInput
    upsert?: ProviderUpsertWithoutConsultationsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutConsultationsInput, ProviderUpdateWithoutConsultationsInput>, ProviderUncheckedUpdateWithoutConsultationsInput>
  }

  export type PrescriptionUpdateManyWithoutConsultationNestedInput = {
    create?: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput> | PrescriptionCreateWithoutConsultationInput[] | PrescriptionUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutConsultationInput | PrescriptionCreateOrConnectWithoutConsultationInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutConsultationInput | PrescriptionUpsertWithWhereUniqueWithoutConsultationInput[]
    createMany?: PrescriptionCreateManyConsultationInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutConsultationInput | PrescriptionUpdateWithWhereUniqueWithoutConsultationInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutConsultationInput | PrescriptionUpdateManyWithWhereWithoutConsultationInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutConsultationNestedInput = {
    create?: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput> | PrescriptionCreateWithoutConsultationInput[] | PrescriptionUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutConsultationInput | PrescriptionCreateOrConnectWithoutConsultationInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutConsultationInput | PrescriptionUpsertWithWhereUniqueWithoutConsultationInput[]
    createMany?: PrescriptionCreateManyConsultationInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutConsultationInput | PrescriptionUpdateWithWhereUniqueWithoutConsultationInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutConsultationInput | PrescriptionUpdateManyWithWhereWithoutConsultationInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type ConsultationCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<ConsultationCreateWithoutPrescriptionsInput, ConsultationUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: ConsultationCreateOrConnectWithoutPrescriptionsInput
    connect?: ConsultationWhereUniqueInput
  }

  export type ConsultationUpdateOneWithoutPrescriptionsNestedInput = {
    create?: XOR<ConsultationCreateWithoutPrescriptionsInput, ConsultationUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: ConsultationCreateOrConnectWithoutPrescriptionsInput
    upsert?: ConsultationUpsertWithoutPrescriptionsInput
    disconnect?: ConsultationWhereInput | boolean
    delete?: ConsultationWhereInput | boolean
    connect?: ConsultationWhereUniqueInput
    update?: XOR<XOR<ConsultationUpdateToOneWithWhereWithoutPrescriptionsInput, ConsultationUpdateWithoutPrescriptionsInput>, ConsultationUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type UserCreateNestedOneWithoutHealthReadingsInput = {
    create?: XOR<UserCreateWithoutHealthReadingsInput, UserUncheckedCreateWithoutHealthReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealthReadingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHealthReadingsNestedInput = {
    create?: XOR<UserCreateWithoutHealthReadingsInput, UserUncheckedCreateWithoutHealthReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHealthReadingsInput
    upsert?: UserUpsertWithoutHealthReadingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHealthReadingsInput, UserUpdateWithoutHealthReadingsInput>, UserUncheckedUpdateWithoutHealthReadingsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumConsultationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusFilter<$PrismaModel> | $Enums.ConsultationStatus
  }

  export type NestedEnumConsultationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeFilter<$PrismaModel> | $Enums.ConsultationType
  }

  export type NestedEnumConsultationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationStatusFilter<$PrismaModel>
    _max?: NestedEnumConsultationStatusFilter<$PrismaModel>
  }

  export type NestedEnumConsultationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationTypeFilter<$PrismaModel>
    _max?: NestedEnumConsultationTypeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProviderCreateWithoutUserInput = {
    id?: string
    specialization?: string | null
    yearsExperience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    profileDescription?: string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    consultations?: ConsultationCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutUserInput = {
    id?: string
    specialization?: string | null
    yearsExperience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    profileDescription?: string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    consultations?: ConsultationUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutUserInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
  }

  export type PharmacyCreateWithoutUserInput = {
    id?: string
    pharmacyName: string
    location?: string | null
    contactInfo?: string | null
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    medicines?: PharmacyMedicineCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutUserInput = {
    id?: string
    pharmacyName: string
    location?: string | null
    contactInfo?: string | null
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    medicines?: PharmacyMedicineUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyCreateOrConnectWithoutUserInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    messageText?: string | null
    fileUrl?: string | null
    timestamp?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    messageText?: string | null
    fileUrl?: string | null
    timestamp?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    messageText?: string | null
    fileUrl?: string | null
    timestamp?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    messageText?: string | null
    fileUrl?: string | null
    timestamp?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    senderId?: string | null
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    senderId?: string | null
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HealthReadingCreateWithoutPatientInput = {
    id?: string
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    timestamp?: Date | string
  }

  export type HealthReadingUncheckedCreateWithoutPatientInput = {
    id?: string
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    timestamp?: Date | string
  }

  export type HealthReadingCreateOrConnectWithoutPatientInput = {
    where: HealthReadingWhereUniqueInput
    create: XOR<HealthReadingCreateWithoutPatientInput, HealthReadingUncheckedCreateWithoutPatientInput>
  }

  export type HealthReadingCreateManyPatientInputEnvelope = {
    data: HealthReadingCreateManyPatientInput | HealthReadingCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationCreateWithoutPatientInput = {
    id?: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutConsultationsInput
    prescriptions?: PrescriptionCreateNestedManyWithoutConsultationInput
  }

  export type ConsultationUncheckedCreateWithoutPatientInput = {
    id?: string
    providerId: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutConsultationInput
  }

  export type ConsultationCreateOrConnectWithoutPatientInput = {
    where: ConsultationWhereUniqueInput
    create: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput>
  }

  export type ConsultationCreateManyPatientInputEnvelope = {
    data: ConsultationCreateManyPatientInput | ConsultationCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutUserInput = {
    update: XOR<ProviderUpdateWithoutUserInput, ProviderUncheckedUpdateWithoutUserInput>
    create: XOR<ProviderCreateWithoutUserInput, ProviderUncheckedCreateWithoutUserInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutUserInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutUserInput, ProviderUncheckedUpdateWithoutUserInput>
  }

  export type ProviderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profileDescription?: NullableStringFieldUpdateOperationsInput | string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultations?: ConsultationUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profileDescription?: NullableStringFieldUpdateOperationsInput | string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultations?: ConsultationUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type PharmacyUpsertWithoutUserInput = {
    update: XOR<PharmacyUpdateWithoutUserInput, PharmacyUncheckedUpdateWithoutUserInput>
    create: XOR<PharmacyCreateWithoutUserInput, PharmacyUncheckedCreateWithoutUserInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutUserInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutUserInput, PharmacyUncheckedUpdateWithoutUserInput>
  }

  export type PharmacyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicines?: PharmacyMedicineUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicines?: PharmacyMedicineUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: UuidFilter<"Message"> | string
    senderId?: UuidFilter<"Message"> | string
    receiverId?: UuidFilter<"Message"> | string
    messageText?: StringNullableFilter<"Message"> | string | null
    fileUrl?: StringNullableFilter<"Message"> | string | null
    timestamp?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: UuidFilter<"Notification"> | string
    userId?: UuidFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    senderId?: UuidNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type HealthReadingUpsertWithWhereUniqueWithoutPatientInput = {
    where: HealthReadingWhereUniqueInput
    update: XOR<HealthReadingUpdateWithoutPatientInput, HealthReadingUncheckedUpdateWithoutPatientInput>
    create: XOR<HealthReadingCreateWithoutPatientInput, HealthReadingUncheckedCreateWithoutPatientInput>
  }

  export type HealthReadingUpdateWithWhereUniqueWithoutPatientInput = {
    where: HealthReadingWhereUniqueInput
    data: XOR<HealthReadingUpdateWithoutPatientInput, HealthReadingUncheckedUpdateWithoutPatientInput>
  }

  export type HealthReadingUpdateManyWithWhereWithoutPatientInput = {
    where: HealthReadingScalarWhereInput
    data: XOR<HealthReadingUpdateManyMutationInput, HealthReadingUncheckedUpdateManyWithoutPatientInput>
  }

  export type HealthReadingScalarWhereInput = {
    AND?: HealthReadingScalarWhereInput | HealthReadingScalarWhereInput[]
    OR?: HealthReadingScalarWhereInput[]
    NOT?: HealthReadingScalarWhereInput | HealthReadingScalarWhereInput[]
    id?: UuidFilter<"HealthReading"> | string
    patientId?: UuidFilter<"HealthReading"> | string
    bloodPressure?: StringNullableFilter<"HealthReading"> | string | null
    heartRate?: IntNullableFilter<"HealthReading"> | number | null
    temperature?: DecimalNullableFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: DecimalNullableFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    weight?: DecimalNullableFilter<"HealthReading"> | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFilter<"HealthReading"> | Date | string
  }

  export type ConsultationUpsertWithWhereUniqueWithoutPatientInput = {
    where: ConsultationWhereUniqueInput
    update: XOR<ConsultationUpdateWithoutPatientInput, ConsultationUncheckedUpdateWithoutPatientInput>
    create: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput>
  }

  export type ConsultationUpdateWithWhereUniqueWithoutPatientInput = {
    where: ConsultationWhereUniqueInput
    data: XOR<ConsultationUpdateWithoutPatientInput, ConsultationUncheckedUpdateWithoutPatientInput>
  }

  export type ConsultationUpdateManyWithWhereWithoutPatientInput = {
    where: ConsultationScalarWhereInput
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyWithoutPatientInput>
  }

  export type ConsultationScalarWhereInput = {
    AND?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
    OR?: ConsultationScalarWhereInput[]
    NOT?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
    id?: UuidFilter<"Consultation"> | string
    patientId?: UuidFilter<"Consultation"> | string
    providerId?: UuidFilter<"Consultation"> | string
    consultationDate?: DateTimeFilter<"Consultation"> | Date | string
    consultationTime?: DateTimeFilter<"Consultation"> | Date | string
    consultationStatus?: EnumConsultationStatusFilter<"Consultation"> | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFilter<"Consultation"> | $Enums.ConsultationType
    meetingLink?: StringNullableFilter<"Consultation"> | string | null
    consultationNotes?: StringNullableFilter<"Consultation"> | string | null
    createdAt?: DateTimeFilter<"Consultation"> | Date | string
    updatedAt?: DateTimeFilter<"Consultation"> | Date | string
  }

  export type UserCreateWithoutProviderInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutProviderInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingUncheckedCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutProviderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProviderInput, UserUncheckedCreateWithoutProviderInput>
  }

  export type ConsultationCreateWithoutProviderInput = {
    id?: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: UserCreateNestedOneWithoutPatientConsultationsInput
    prescriptions?: PrescriptionCreateNestedManyWithoutConsultationInput
  }

  export type ConsultationUncheckedCreateWithoutProviderInput = {
    id?: string
    patientId: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutConsultationInput
  }

  export type ConsultationCreateOrConnectWithoutProviderInput = {
    where: ConsultationWhereUniqueInput
    create: XOR<ConsultationCreateWithoutProviderInput, ConsultationUncheckedCreateWithoutProviderInput>
  }

  export type ConsultationCreateManyProviderInputEnvelope = {
    data: ConsultationCreateManyProviderInput | ConsultationCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProviderInput = {
    update: XOR<UserUpdateWithoutProviderInput, UserUncheckedUpdateWithoutProviderInput>
    create: XOR<UserCreateWithoutProviderInput, UserUncheckedCreateWithoutProviderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProviderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProviderInput, UserUncheckedUpdateWithoutProviderInput>
  }

  export type UserUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUncheckedUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ConsultationUpsertWithWhereUniqueWithoutProviderInput = {
    where: ConsultationWhereUniqueInput
    update: XOR<ConsultationUpdateWithoutProviderInput, ConsultationUncheckedUpdateWithoutProviderInput>
    create: XOR<ConsultationCreateWithoutProviderInput, ConsultationUncheckedCreateWithoutProviderInput>
  }

  export type ConsultationUpdateWithWhereUniqueWithoutProviderInput = {
    where: ConsultationWhereUniqueInput
    data: XOR<ConsultationUpdateWithoutProviderInput, ConsultationUncheckedUpdateWithoutProviderInput>
  }

  export type ConsultationUpdateManyWithWhereWithoutProviderInput = {
    where: ConsultationScalarWhereInput
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyWithoutProviderInput>
  }

  export type UserCreateWithoutPharmacyInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutPharmacyInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingUncheckedCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutPharmacyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
  }

  export type PharmacyMedicineCreateWithoutPharmacyInput = {
    id?: string
    medicineName: string
    genericName?: string | null
    quantity?: number
    availabilityStatus?: boolean
    updatedAt?: Date | string
  }

  export type PharmacyMedicineUncheckedCreateWithoutPharmacyInput = {
    id?: string
    medicineName: string
    genericName?: string | null
    quantity?: number
    availabilityStatus?: boolean
    updatedAt?: Date | string
  }

  export type PharmacyMedicineCreateOrConnectWithoutPharmacyInput = {
    where: PharmacyMedicineWhereUniqueInput
    create: XOR<PharmacyMedicineCreateWithoutPharmacyInput, PharmacyMedicineUncheckedCreateWithoutPharmacyInput>
  }

  export type PharmacyMedicineCreateManyPharmacyInputEnvelope = {
    data: PharmacyMedicineCreateManyPharmacyInput | PharmacyMedicineCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPharmacyInput = {
    update: XOR<UserUpdateWithoutPharmacyInput, UserUncheckedUpdateWithoutPharmacyInput>
    create: XOR<UserCreateWithoutPharmacyInput, UserUncheckedCreateWithoutPharmacyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPharmacyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPharmacyInput, UserUncheckedUpdateWithoutPharmacyInput>
  }

  export type UserUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUncheckedUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PharmacyMedicineUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: PharmacyMedicineWhereUniqueInput
    update: XOR<PharmacyMedicineUpdateWithoutPharmacyInput, PharmacyMedicineUncheckedUpdateWithoutPharmacyInput>
    create: XOR<PharmacyMedicineCreateWithoutPharmacyInput, PharmacyMedicineUncheckedCreateWithoutPharmacyInput>
  }

  export type PharmacyMedicineUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: PharmacyMedicineWhereUniqueInput
    data: XOR<PharmacyMedicineUpdateWithoutPharmacyInput, PharmacyMedicineUncheckedUpdateWithoutPharmacyInput>
  }

  export type PharmacyMedicineUpdateManyWithWhereWithoutPharmacyInput = {
    where: PharmacyMedicineScalarWhereInput
    data: XOR<PharmacyMedicineUpdateManyMutationInput, PharmacyMedicineUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type PharmacyMedicineScalarWhereInput = {
    AND?: PharmacyMedicineScalarWhereInput | PharmacyMedicineScalarWhereInput[]
    OR?: PharmacyMedicineScalarWhereInput[]
    NOT?: PharmacyMedicineScalarWhereInput | PharmacyMedicineScalarWhereInput[]
    id?: UuidFilter<"PharmacyMedicine"> | string
    pharmacyId?: UuidFilter<"PharmacyMedicine"> | string
    medicineName?: StringFilter<"PharmacyMedicine"> | string
    genericName?: StringNullableFilter<"PharmacyMedicine"> | string | null
    quantity?: IntFilter<"PharmacyMedicine"> | number
    availabilityStatus?: BoolFilter<"PharmacyMedicine"> | boolean
    updatedAt?: DateTimeFilter<"PharmacyMedicine"> | Date | string
  }

  export type PharmacyCreateWithoutMedicinesInput = {
    id?: string
    pharmacyName: string
    location?: string | null
    contactInfo?: string | null
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateWithoutMedicinesInput = {
    id?: string
    userId: string
    pharmacyName: string
    location?: string | null
    contactInfo?: string | null
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PharmacyCreateOrConnectWithoutMedicinesInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutMedicinesInput, PharmacyUncheckedCreateWithoutMedicinesInput>
  }

  export type PharmacyUpsertWithoutMedicinesInput = {
    update: XOR<PharmacyUpdateWithoutMedicinesInput, PharmacyUncheckedUpdateWithoutMedicinesInput>
    create: XOR<PharmacyCreateWithoutMedicinesInput, PharmacyUncheckedCreateWithoutMedicinesInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutMedicinesInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutMedicinesInput, PharmacyUncheckedUpdateWithoutMedicinesInput>
  }

  export type PharmacyUpdateWithoutMedicinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pharmacyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateWithoutMedicinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pharmacyName?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPatientConsultationsInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutPatientConsultationsInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutPatientConsultationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientConsultationsInput, UserUncheckedCreateWithoutPatientConsultationsInput>
  }

  export type ProviderCreateWithoutConsultationsInput = {
    id?: string
    specialization?: string | null
    yearsExperience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    profileDescription?: string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutConsultationsInput = {
    id?: string
    userId: string
    specialization?: string | null
    yearsExperience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    profileDescription?: string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderCreateOrConnectWithoutConsultationsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutConsultationsInput, ProviderUncheckedCreateWithoutConsultationsInput>
  }

  export type PrescriptionCreateWithoutConsultationInput = {
    id?: string
    medicineName: string
    dosage?: string | null
    frequency?: string | null
    duration?: string | null
    instructions?: string | null
  }

  export type PrescriptionUncheckedCreateWithoutConsultationInput = {
    id?: string
    medicineName: string
    dosage?: string | null
    frequency?: string | null
    duration?: string | null
    instructions?: string | null
  }

  export type PrescriptionCreateOrConnectWithoutConsultationInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput>
  }

  export type PrescriptionCreateManyConsultationInputEnvelope = {
    data: PrescriptionCreateManyConsultationInput | PrescriptionCreateManyConsultationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientConsultationsInput = {
    update: XOR<UserUpdateWithoutPatientConsultationsInput, UserUncheckedUpdateWithoutPatientConsultationsInput>
    create: XOR<UserCreateWithoutPatientConsultationsInput, UserUncheckedCreateWithoutPatientConsultationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientConsultationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientConsultationsInput, UserUncheckedUpdateWithoutPatientConsultationsInput>
  }

  export type UserUpdateWithoutPatientConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ProviderUpsertWithoutConsultationsInput = {
    update: XOR<ProviderUpdateWithoutConsultationsInput, ProviderUncheckedUpdateWithoutConsultationsInput>
    create: XOR<ProviderCreateWithoutConsultationsInput, ProviderUncheckedCreateWithoutConsultationsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutConsultationsInput, ProviderUncheckedUpdateWithoutConsultationsInput>
  }

  export type ProviderUpdateWithoutConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profileDescription?: NullableStringFieldUpdateOperationsInput | string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profileDescription?: NullableStringFieldUpdateOperationsInput | string | null
    availabilitySchedule?: NullableJsonNullValueInput | InputJsonValue
    licenseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutConsultationInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutConsultationInput, PrescriptionUncheckedUpdateWithoutConsultationInput>
    create: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutConsultationInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutConsultationInput, PrescriptionUncheckedUpdateWithoutConsultationInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutConsultationInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutConsultationInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: UuidFilter<"Prescription"> | string
    consultationId?: UuidNullableFilter<"Prescription"> | string | null
    medicineName?: StringFilter<"Prescription"> | string
    dosage?: StringNullableFilter<"Prescription"> | string | null
    frequency?: StringNullableFilter<"Prescription"> | string | null
    duration?: StringNullableFilter<"Prescription"> | string | null
    instructions?: StringNullableFilter<"Prescription"> | string | null
  }

  export type ConsultationCreateWithoutPrescriptionsInput = {
    id?: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: UserCreateNestedOneWithoutPatientConsultationsInput
    provider: ProviderCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    patientId: string
    providerId: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationCreateOrConnectWithoutPrescriptionsInput = {
    where: ConsultationWhereUniqueInput
    create: XOR<ConsultationCreateWithoutPrescriptionsInput, ConsultationUncheckedCreateWithoutPrescriptionsInput>
  }

  export type ConsultationUpsertWithoutPrescriptionsInput = {
    update: XOR<ConsultationUpdateWithoutPrescriptionsInput, ConsultationUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<ConsultationCreateWithoutPrescriptionsInput, ConsultationUncheckedCreateWithoutPrescriptionsInput>
    where?: ConsultationWhereInput
  }

  export type ConsultationUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: ConsultationWhereInput
    data: XOR<ConsultationUpdateWithoutPrescriptionsInput, ConsultationUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type ConsultationUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutPatientConsultationsNestedInput
    provider?: ProviderUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutHealthReadingsInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    patientConsultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutHealthReadingsInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    patientConsultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutHealthReadingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHealthReadingsInput, UserUncheckedCreateWithoutHealthReadingsInput>
  }

  export type UserUpsertWithoutHealthReadingsInput = {
    update: XOR<UserUpdateWithoutHealthReadingsInput, UserUncheckedUpdateWithoutHealthReadingsInput>
    create: XOR<UserCreateWithoutHealthReadingsInput, UserUncheckedCreateWithoutHealthReadingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHealthReadingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHealthReadingsInput, UserUncheckedUpdateWithoutHealthReadingsInput>
  }

  export type UserUpdateWithoutHealthReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    patientConsultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutHealthReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    patientConsultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedOneWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingUncheckedCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    healthReadings?: HealthReadingUncheckedCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateOneWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateOneWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUncheckedUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    healthReadings?: HealthReadingUncheckedUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyCreateNestedOneWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    healthReadings?: HealthReadingCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    fullName: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderUncheckedCreateNestedOneWithoutUserInput
    pharmacy?: PharmacyUncheckedCreateNestedOneWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    healthReadings?: HealthReadingUncheckedCreateNestedManyWithoutPatientInput
    patientConsultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    healthReadings?: HealthReadingUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUncheckedUpdateOneWithoutUserNestedInput
    pharmacy?: PharmacyUncheckedUpdateOneWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    healthReadings?: HealthReadingUncheckedUpdateManyWithoutPatientNestedInput
    patientConsultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: string
    receiverId: string
    messageText?: string | null
    fileUrl?: string | null
    timestamp?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    senderId: string
    messageText?: string | null
    fileUrl?: string | null
    timestamp?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    senderId?: string | null
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type HealthReadingCreateManyPatientInput = {
    id?: string
    bloodPressure?: string | null
    heartRate?: number | null
    temperature?: Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: Decimal | DecimalJsLike | number | string | null
    weight?: Decimal | DecimalJsLike | number | string | null
    timestamp?: Date | string
  }

  export type ConsultationCreateManyPatientInput = {
    id?: string
    providerId: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    messageText?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthReadingUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthReadingUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthReadingUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bloodPressure?: NullableStringFieldUpdateOperationsInput | string | null
    heartRate?: NullableIntFieldUpdateOperationsInput | number | null
    temperature?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bloodGlucose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutConsultationsNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutConsultationNestedInput
  }

  export type ConsultationUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutConsultationNestedInput
  }

  export type ConsultationUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationCreateManyProviderInput = {
    id?: string
    patientId: string
    consultationDate: Date | string
    consultationTime: Date | string
    consultationStatus?: $Enums.ConsultationStatus
    consultationType?: $Enums.ConsultationType
    meetingLink?: string | null
    consultationNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UserUpdateOneRequiredWithoutPatientConsultationsNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutConsultationNestedInput
  }

  export type ConsultationUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutConsultationNestedInput
  }

  export type ConsultationUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    consultationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationTime?: DateTimeFieldUpdateOperationsInput | Date | string
    consultationStatus?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    consultationNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyMedicineCreateManyPharmacyInput = {
    id?: string
    medicineName: string
    genericName?: string | null
    quantity?: number
    availabilityStatus?: boolean
    updatedAt?: Date | string
  }

  export type PharmacyMedicineUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    availabilityStatus?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyMedicineUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    availabilityStatus?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyMedicineUncheckedUpdateManyWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    genericName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    availabilityStatus?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateManyConsultationInput = {
    id?: string
    medicineName: string
    dosage?: string | null
    frequency?: string | null
    duration?: string | null
    instructions?: string | null
  }

  export type PrescriptionUpdateWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionUncheckedUpdateWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionUncheckedUpdateManyWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicineName?: StringFieldUpdateOperationsInput | string
    dosage?: NullableStringFieldUpdateOperationsInput | string | null
    frequency?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}