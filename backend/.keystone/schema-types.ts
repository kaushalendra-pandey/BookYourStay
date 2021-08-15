type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type AllImageRelateToOneInput = {
  readonly create?: AllImageCreateInput | null;
  readonly connect?: AllImageWhereUniqueInput | null;
  readonly disconnect?: AllImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type HotelWhereInput = {
  readonly AND?: ReadonlyArray<HotelWhereInput | null> | null;
  readonly OR?: ReadonlyArray<HotelWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly rent?: Scalars['Int'] | null;
  readonly rent_not?: Scalars['Int'] | null;
  readonly rent_lt?: Scalars['Int'] | null;
  readonly rent_lte?: Scalars['Int'] | null;
  readonly rent_gt?: Scalars['Int'] | null;
  readonly rent_gte?: Scalars['Int'] | null;
  readonly rent_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly rent_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly location?: Scalars['String'] | null;
  readonly location_not?: Scalars['String'] | null;
  readonly location_contains?: Scalars['String'] | null;
  readonly location_not_contains?: Scalars['String'] | null;
  readonly location_starts_with?: Scalars['String'] | null;
  readonly location_not_starts_with?: Scalars['String'] | null;
  readonly location_ends_with?: Scalars['String'] | null;
  readonly location_not_ends_with?: Scalars['String'] | null;
  readonly location_i?: Scalars['String'] | null;
  readonly location_not_i?: Scalars['String'] | null;
  readonly location_contains_i?: Scalars['String'] | null;
  readonly location_not_contains_i?: Scalars['String'] | null;
  readonly location_starts_with_i?: Scalars['String'] | null;
  readonly location_not_starts_with_i?: Scalars['String'] | null;
  readonly location_ends_with_i?: Scalars['String'] | null;
  readonly location_not_ends_with_i?: Scalars['String'] | null;
  readonly location_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly location_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: AllImageWhereInput | null;
  readonly image_is_null?: Scalars['Boolean'] | null;
};

export type HotelWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortHotelsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'rent_ASC'
  | 'rent_DESC'
  | 'location_ASC'
  | 'location_DESC'
  | 'image_ASC'
  | 'image_DESC';

export type HotelUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly rent?: Scalars['Int'] | null;
  readonly location?: Scalars['String'] | null;
  readonly image?: AllImageRelateToOneInput | null;
};

export type HotelsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: HotelUpdateInput | null;
};

export type HotelCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly rent?: Scalars['Int'] | null;
  readonly location?: Scalars['String'] | null;
  readonly image?: AllImageRelateToOneInput | null;
};

export type HotelsCreateInput = {
  readonly data?: HotelCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type HotelRelateToOneInput = {
  readonly create?: HotelCreateInput | null;
  readonly connect?: HotelWhereUniqueInput | null;
  readonly disconnect?: HotelWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type AllImageWhereInput = {
  readonly AND?: ReadonlyArray<AllImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<AllImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly images?: Scalars['String'] | null;
  readonly images_not?: Scalars['String'] | null;
  readonly images_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly images_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly hotel?: HotelWhereInput | null;
  readonly hotel_is_null?: Scalars['Boolean'] | null;
};

export type AllImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortAllImagesBy = 'id_ASC' | 'id_DESC' | 'hotel_ASC' | 'hotel_DESC';

export type AllImageUpdateInput = {
  readonly images?: any | null;
  readonly hotel?: HotelRelateToOneInput | null;
};

export type AllImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: AllImageUpdateInput | null;
};

export type AllImageCreateInput = {
  readonly images?: any | null;
  readonly hotel?: HotelRelateToOneInput | null;
};

export type AllImagesCreateInput = {
  readonly data?: AllImageCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type HotelListTypeInfo = {
  key: 'Hotel';
  fields: 'id' | 'name' | 'description' | 'rent' | 'location' | 'image';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly rent?: number | null;
    readonly location?: string | null;
    readonly image?: string | null;
  };
  inputs: {
    where: HotelWhereInput;
    create: HotelCreateInput;
    update: HotelUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: HotelWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortHotelsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type HotelListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    HotelListTypeInfo,
    HotelListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  HotelListTypeInfo,
  HotelListTypeInfo['fields']
>;

export type AllImageListTypeInfo = {
  key: 'AllImage';
  fields: 'id' | 'images' | 'hotel';
  backing: {
    readonly id: string;
    readonly images?: any;
    readonly hotel?: string | null;
  };
  inputs: {
    where: AllImageWhereInput;
    create: AllImageCreateInput;
    update: AllImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: AllImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortAllImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type AllImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    AllImageListTypeInfo,
    AllImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  AllImageListTypeInfo,
  AllImageListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Hotel: HotelListTypeInfo;
  readonly AllImage: AllImageListTypeInfo;
};
