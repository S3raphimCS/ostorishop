/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface EmailVerify {
  /**
   * Базовая ссылка на frontend стороне
   * К ней добавляется /uid/token/ и отправляется пользователю в письме
   * @format uri
   * @minLength 1
   */
  confirm_url: string;
  /**
   * To email
   * Email адрес к которому привязан аккаунт
   * @format email
   * @minLength 1
   */
  to_email: string;
}

export interface PasswordChange {
  /**
   * Старый пароль
   * @minLength 1
   */
  old_password: string;
  /**
   * Новый пароль
   * @minLength 1
   */
  new_password1: string;
  /**
   * Подтверждение пароль
   * @minLength 1
   */
  new_password2: string;
}

export interface PasswordForgotEmail {
  /**
   * Базовая ссылка на frontend стороне
   * К ней добавляется /uid/token/ и отправляется пользователю в письме
   * @format uri
   * @minLength 1
   */
  forgot_url: string;
  /**
   * To email
   * Email адрес к которому был привязан аккаунт
   * @format email
   * @minLength 1
   */
  to_email: string;
}

export interface TokenObtainPair {
  /**
   * Email
   * @minLength 1
   */
  email: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
}

export interface TokenRefresh {
  /**
   * Refresh
   * @minLength 1
   */
  refresh: string;
  /**
   * Access
   * @minLength 1
   */
  access?: string;
}

export interface UserRegister {
  /**
   * Last name
   * @minLength 1
   */
  last_name?: string;
  /**
   * First name
   * @minLength 1
   */
  first_name?: string;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Password1
   * @minLength 8
   */
  password1: string;
  /**
   * Password2
   * @minLength 8
   */
  password2: string;
}

export interface CustomUser {
  /** ID */
  id?: number;
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
  /**
   * Имя
   * @maxLength 150
   */
  first_name?: string;
  /**
   * Фамилия
   * @maxLength 150
   */
  last_name?: string;
  /**
   * Avatar
   * @minLength 1
   */
  avatar?: string;
  /** Is email verified */
  is_email_verified: boolean;
}

export interface CategoryList {
  /**
   * Icon
   * @minLength 1
   */
  icon?: string;
  /**
   * Name
   * @minLength 1
   */
  name?: string;
  /**
   * Slug
   * @minLength 1
   */
  slug?: string;
}

export interface Color {
  /**
   * Color
   * @minLength 1
   */
  color: string;
  /**
   * Icon
   * @format uri
   */
  icon?: string;
}

export interface Size {
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Size
   * @minLength 1
   */
  size?: string;
}

export interface Product {
  /** Id */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name?: string;
  /** @uniqueItems true */
  images?: string[];
  /** Comments */
  comments?: string;
  /**
   * Артикул
   * @maxLength 127
   */
  article?: string;
  /**
   * Description
   * @minLength 1
   */
  description?: string;
  /**
   * Цена
   * @format decimal
   */
  price?: string;
  /** Доступно */
  quantity?: number;
  /**
   * Slug
   * @format slug
   * @maxLength 50
   * @pattern ^[-a-zA-Z0-9_]+$
   */
  slug?: string | null;
  /** Available */
  available?: boolean;
  categories?: CategoryList[];
  colors?: Color[];
  sizes?: Size[];
}

export interface CartProduct {
  /** Id */
  id?: number;
  /** Count */
  count: number;
  /** Product id */
  product_id?: string;
  product: Product;
  color: Color;
  size: Size;
}

export interface FavoriteProduct {
  user?: CustomUser;
  product: Product;
}

export interface Discount {
  /**
   * Title
   * @minLength 1
   */
  title?: string;
  /** Discount amount */
  discount_amount?: number;
  /**
   * Promocode
   * @minLength 1
   */
  promocode: string;
  product_categories?: CategoryList;
}

export interface Order {
  /** Id */
  id?: number;
  order_items: CartProduct[];
  /** Is paid */
  is_paid?: boolean;
  discount?: Discount;
  /**
   * Status
   * @minLength 1
   */
  status?: string;
  /**
   * Total price
   * @format decimal
   */
  total_price?: string;
  /**
   * City
   * @minLength 1
   */
  city: string;
  /**
   * Street
   * @minLength 1
   */
  street: string;
  /** House number */
  house_number: number;
  /** Apartment number */
  apartment_number: number;
  /**
   * Recipient
   * @minLength 1
   */
  recipient: string;
  /** Postal code */
  postal_code: number;
  /**
   * Created at
   * @format date-time
   */
  created_at?: string;
}

export interface Help {
  /**
   * Вопрос
   * @minLength 1
   * @maxLength 500
   */
  question: string;
  /**
   * Ответ
   * @minLength 1
   */
  answer: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:8000/api';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string'
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Магазин Ostori
 * @version v1
 * @baseUrl http://localhost:8000/api
 *
 * Документация API магазина Ostori
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * @description Подтверждение почты. Доступна аутентифицированному пользователю с неподтвержденной почтой.
     *
     * @tags Auth
     * @name AuthEmailVerifySendLinkToEmail
     * @summary Отправить ссылку для подтверждения почты на email
     * @request POST:/auth/email/verify/send/
     * @secure
     */
    authEmailVerifySendLinkToEmail: (
      data: EmailVerify,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/auth/email/verify/send/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Подтверждение почты. Доступна аутентифицированному пользователю с неподтвержденной почтой.
     *
     * @tags Auth
     * @name AuthEmailEmailVerify
     * @summary Подтверждение почты
     * @request POST:/auth/email/verify/{uidb64}/{token}/
     * @secure
     */
    authEmailEmailVerify: (
      uidb64: string,
      token: string,
      data: {
        email?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        {
          detail: string[];
        }
      >({
        path: `/auth/email/verify/${uidb64}/${token}/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Смена пароля. Доступна любому аутентифицированному пользователю.
     *
     * @tags Auth
     * @name AuthPasswordChangeUpdate
     * @summary Сменить пароль
     * @request PUT:/auth/password/change/
     * @secure
     */
    authPasswordChangeUpdate: (
      data: PasswordChange,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | {
            detail: string[];
          }
        | {
            detail: string;
            code?: string;
          }
      >({
        path: `/auth/password/change/`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Отправка ссылки для восстановления пароля. Доступна любому пользователю.
     *
     * @tags Auth
     * @name AuthPasswordForgotSendLinkToEmail
     * @summary Отправить ссылку на восстановления на email
     * @request POST:/auth/password/forgot/email/
     * @secure
     */
    authPasswordForgotSendLinkToEmail: (
      data: PasswordForgotEmail,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/auth/password/forgot/email/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Подтверждение смены пароля. Доступна любому пользователю.
     *
     * @tags Auth
     * @name AuthPasswordForgotConfirm
     * @summary Восстановить пароль
     * @request POST:/auth/password/forgot/{uidb64}/{token}/
     * @secure
     */
    authPasswordForgotConfirm: (
      uidb64: string,
      token: string,
      data: {
        new_password1?: string;
        new_password2?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        {
          detail: string[];
        }
      >({
        path: `/auth/password/forgot/${uidb64}/${token}/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Вход в систему. В ответе заголовок "Set-Cookies" с ostorishop_token=eyJ.., который равен access_token в ответе.
     *
     * @tags Auth
     * @name AuthUserLoginCreate
     * @summary Войти
     * @request POST:/auth/user/login/
     * @secure
     */
    authUserLoginCreate: (data: TokenObtainPair, params: RequestParams = {}) =>
      this.request<
        TokenRefresh,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/auth/user/login/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Выход из системы. В ответе заголовок "Set-Cookies" с ostorishop_token=''. То есть удалить ostorishop_token.
     *
     * @tags Auth
     * @name AuthUserLogoutList
     * @summary Выход с аккаунта
     * @request GET:/auth/user/logout/
     * @secure
     */
    authUserLogoutList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/user/logout/`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description Регистрация нового пользователя. Доступна только не аутентифицированным пользователям.
     *
     * @tags Auth
     * @name AuthUserRegisterCreate
     * @summary Регистрация пользователя
     * @request POST:/auth/user/register
     * @secure
     */
    authUserRegisterCreate: (data: UserRegister, params: RequestParams = {}) =>
      this.request<
        {
          /** @format email */
          email?: string;
          phone_number?: string;
          last_name?: string;
          first_name?: string;
        },
        {
          detail: string[];
        }
      >({
        path: `/auth/user/register`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Обновление токена по refresh_token.
     *
     * @tags Auth
     * @name AuthUserTokenRefreshCreate
     * @summary Обновить токен
     * @request POST:/auth/user/token/refresh
     * @secure
     */
    authUserTokenRefreshCreate: (
      data: TokenRefresh,
      params: RequestParams = {}
    ) =>
      this.request<
        TokenRefresh,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/auth/user/token/refresh`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Получение профиля пользователя. Доступно только для id равному user_id пользователя, который отправляет запрос.
     *
     * @tags User
     * @name AuthUserRead
     * @summary Получить информацию о пользователе
     * @request GET:/auth/user/{id}
     * @secure
     */
    authUserRead: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          /** @format email */
          email?: string;
          phone_number?: string;
          last_name?: string;
          first_name?: string;
        },
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/auth/user/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удаление пользователя из БД. Доступно только для id равному user_id пользователя, который отправляет запрос.
     *
     * @tags User
     * @name AuthUserPartialUpdate
     * @summary Частично обновить профиль пользователя
     * @request PUT:/auth/user/{id}
     * @secure
     */
    authUserPartialUpdate: (
      id: string,
      data: CustomUser,
      params: RequestParams = {}
    ) =>
      this.request<
        CustomUser,
        | {
            detail: string[];
          }
        | {
            detail: string;
            code?: string;
          }
      >({
        path: `/auth/user/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AuthUserDelete
     * @summary Удалить пользователя
     * @request DELETE:/auth/user/{id}
     * @secure
     */
    authUserDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/user/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  cart = {
    /**
     * @description Получить товары из корзины по ID. Доступно только аутентифицированным пользователям.
     *
     * @tags Cart
     * @name CartItems
     * @summary Товары в корзине
     * @request GET:/cart/
     * @secure
     */
    cartItems: (params: RequestParams = {}) =>
      this.request<
        CartProduct,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/cart/`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Добавить товар в корзину. Доступно только аутентифицированным пользователям.
     *
     * @tags Cart
     * @name CartCreate
     * @summary Добавить товар в корзину
     * @request POST:/cart/
     * @secure
     */
    cartCreate: (data: CartProduct, params: RequestParams = {}) =>
      this.request<
        void,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/cart/`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Изменить товар в корзине. Доступно только аутентифицированным пользователям.
     *
     * @tags Cart
     * @name CartUpdate
     * @summary Изменить товар в корзине
     * @request PUT:/cart/
     * @secure
     */
    cartUpdate: (data: CartProduct, params: RequestParams = {}) =>
      this.request<
        void,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/cart/`,
        method: 'PUT',
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Удалить товар из корзины. Доступно только аутентифицированным пользователям.
     *
     * @tags Cart
     * @name DeleteCartItem
     * @summary Удалить товар из корзины
     * @request DELETE:/cart/delete/{id}
     * @secure
     */
    deleteCartItem: (id: string, params: RequestParams = {}) =>
      this.request<
        void,
        | {
            detail: string[];
          }
        | {
            detail: string;
            code?: string;
          }
      >({
        path: `/cart/delete/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Сумма товаров в корзине. Доступно только аутентифицированным пользователям.
     *
     * @tags Cart
     * @name CartTotalPrice
     * @summary Получить сумму товаров в корзине
     * @request GET:/cart/total_price
     * @secure
     */
    cartTotalPrice: (params: RequestParams = {}) =>
      this.request<
        {
          /** @format int32 */
          total_price?: number;
        },
        {
          detail: string[];
        }
      >({
        path: `/cart/total_price`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  favorite = {
    /**
     * @description Получить избранные товары. Доступно только аутентифицированным пользователям.
     *
     * @tags Favorite
     * @name Get
     * @summary Получить избранные товары
     * @request GET:/favorite/
     * @secure
     */
    get: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        FavoriteProduct,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/favorite/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Добавить товар в избранное. Доступно только аутентифицированным пользователям.
     *
     * @tags Favorite
     * @name FavoritePost
     * @summary Добавить товар в избранное
     * @request POST:/favorite/add/{product_id}
     * @secure
     */
    favoritePost: (
      productId: string,
      data: FavoriteProduct,
      params: RequestParams = {}
    ) =>
      this.request<
        FavoriteProduct,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/favorite/add/${productId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Удалить товар из избранного. Доступно только аутентифицированным пользователям.
     *
     * @tags Favorite
     * @name FavoriteDelete
     * @summary Удалить товар из избранного
     * @request DELETE:/favorite/delete/{id}
     * @secure
     */
    favoriteDelete: (id: string, params: RequestParams = {}) =>
      this.request<
        void,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/favorite/delete/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  };
  order = {
    /**
     * No description
     *
     * @tags Orders
     * @name OrderRead
     * @summary Получить все заказы
     * @request GET:/order/
     * @secure
     */
    orderRead: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Order[];
        },
        any
      >({
        path: `/order/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrderCreate
     * @summary Создать заказ из товаров корзины
     * @request POST:/order/
     * @secure
     */
    orderCreate: (data: Order, params: RequestParams = {}) =>
      this.request<Order, any>({
        path: `/order/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrderCheckDiscount
     * @summary Проверить скидку на товарах в корзине
     * @request POST:/order/discount/
     * @secure
     */
    orderCheckDiscount: (
      data: {
        promocode?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        Discount,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/order/discount/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrderPayment
     * @summary Оплата заказа
     * @request POST:/order/payment/
     * @secure
     */
    orderPayment: (data: Order, params: RequestParams = {}) =>
      this.request<Order, any>({
        path: `/order/payment/`,
        method: 'POST',
        body: data,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name GetOrder
     * @summary Получить информацию о заказе
     * @request GET:/order/{id}
     * @secure
     */
    getOrder: (id: string, params: RequestParams = {}) =>
      this.request<Order, any>({
        path: `/order/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  products = {
    /**
     * @description Получить список товаров. Доступно всем пользователям.
     *
     * @tags Product
     * @name ProductsList
     * @summary Список товаров
     * @request GET:/products/
     * @secure
     */
    productsList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        Product,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/products/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Получить товар по слагу. Доступно всем пользователям.
     *
     * @tags Product
     * @name ProductBySlug
     * @summary Товар по слагу
     * @request GET:/products/{slug}/
     * @secure
     */
    productBySlug: (
      slug: string,
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        Product,
        {
          detail: string;
          code?: string;
        }
      >({
        path: `/products/${slug}/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  utils = {
    /**
     * @description Получить часто задаваемые вопросы. Доступно всем пользователям.
     *
     * @tags Help
     * @name UtilsHelpFaqList
     * @summary Часто задаваемые вопросы
     * @request GET:/utils/help/faq/
     * @secure
     */
    utilsHelpFaqList: (
      query?: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        {
          count: number;
          /** @format uri */
          next?: string | null;
          /** @format uri */
          previous?: string | null;
          results: Help[];
        },
        any
      >({
        path: `/utils/help/faq/`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Отзыв/запрос направляется администраторам сайта на рабочую почту. Доступно всем пользователям.
     *
     * @tags Help
     * @name UtilsHelpSendFeedbackCreate
     * @summary Оставить отзыв или отправить запрос при трудностях
     * @request POST:/utils/help/send_feedback/
     * @secure
     */
    utilsHelpSendFeedbackCreate: (
      data: {
        /**
         * @minLength 1
         * @maxLength 50
         */
        theme: string;
        /**
         * @minLength 1
         * @maxLength 300
         */
        fio: string;
        /**
         * @format email
         * @minLength 1
         * @maxLength 254
         */
        email: string;
        /** @minLength 1 */
        message: string;
        /** @format binary */
        file?: File | null;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        string,
        {
          detail: string[];
        }
      >({
        path: `/utils/help/send_feedback/`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),
  };
}
