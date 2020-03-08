// @ts-ignore
import React from 'react'
// @ts-ignore
import {Image, TextProps, ImageProps, TouchableOpacityProps, FlatListProps, ViewStyle} from 'react-native'

interface RFStorageType {
    initStorage(targetObj: object, initializedCallback: () => void, dataChangedCallback: (dataSet) => void, version: string): void

    init(targetObj: object, initializedCallback: () => void, dataChangedCallback: (dataSet) => void, version: string): void

    multiGet(keys: any): Promise<any>;

    saveItems(keyValuePairs: any): Promise<any>;

    removeItems(keys: any): Promise<any>;

    clear(): Promise<any>;
}


interface RFHttpConfigType {
    initBaseUrl(baseUrl: String): RFHttpConfig;

    initTimeout(timeout: number): RFHttpConfig;

    initHttpLogOn(httpLogOn: boolean): RFHttpConfig;

    initNetConnect(isConnected: Promise<boolean>): RFHttpConfig;

    initHeaderSetFunc(headerSetFunc: (params: object, request: object) => void): RFHttpConfig;

    initParamSetFunc(paramSetFunc: (params: object, request: object) => void): RFHttpConfig;

    initParseDataFunc(parseDataFunc: ({success, jData, msg, status}, request: any, callback: any) => void): RFHttpConfig;

    initContentType(contentType: string): RFHttpConfig;
}

interface RFApiConstType {
    TIMEOUT: number,
    CONTENT_TYPE_JSON: string,
    CONTENT_TYPE_FORM_DATA: string,
    CONTENT_TYPE_URLENCODED: string,
    Methods: object,
    errorDesc: object
    statusDesc: object,
}


interface HttpRequestType {
    new(): HttpRequest;

    url(url: string): HttpRequest;

    param(param: object): HttpRequest;

    contentType(contentType: string): HttpRequest;

    internal(internal: boolean): HttpRequest;

    header(header: object): HttpRequest;

    extra(extra: any): HttpRequest;

    timeout(timeout: number): HttpRequest;

    loadingFunc(func: (loading: boolean) => void): HttpRequest;

    rawData(): HttpRequest;

    pureText(): HttpRequest;

    formJson(): HttpRequest;

    formData(): HttpRequest;

    formEncoded(): HttpRequest;

    get(callback: (success: boolean, json: object, message: string, status: number) => void): void;

    post(callback: (success: boolean, json: object, message: string, status: number) => void): void;

    options(callback: (success: boolean, json: object, message: string, status: number) => void): void;

    put(callback: (success: boolean, json: object, message: string, status: number) => void): void;

    delete(callback: (success: boolean, json: object, message: string, status: number) => void): void;

    patch(callback: (success: boolean, json: object, message: string, status: number) => void): void;

    request(method: string, callback: (success: boolean, json: object, message: string, status: number) => void): void;

    execute(method: string): Promise<any>

}

export function RFHttp(): HttpRequest

export function RFSize(size: number): number

export function RTSize(size: number): number

export function RFResetStyle(style: ViewStyle): ViewStyle

export function RFSplitStyle(style: ViewStyle): object

export function RFlattenStyle(style: ViewStyle): ViewStyle

interface RFWidgetType {
    initResource(imageBaseUrl: string): RFWidget;

    initReferenceScreen(targetWidth: number, targetHeight: number): RFWidget;
}

// Storage
export type RFStorage = RFStorageType;
export var RFStorage: RFStorageType;

// HttpConfig
export type RFHttpConfig = RFHttpConfigType;
export var RFHttpConfig: RFHttpConfigType;

// RFApiConst
export type RFApiConst = RFApiConstType;
export var RFApiConst: RFApiConstType;

// Http HttpRequest
export type HttpRequest = HttpRequestType;
export var HttpRequest: HttpRequestType;

// Widget Resource
export type RFWidget = RFWidgetType;
export var RFWidget: RFWidgetType;

export interface RFImageProps {
    raw?: boolean
    icon?: string,
    iconSize?: number,
}

// RFImage
export class RFImage extends React.Component<RFImageProps & ImageProps & TouchableOpacityProps> {
}

declare type IconPosition = 'left' | 'top' | 'right' | 'bottom';

export interface RFTextProps {
    raw: boolean,
    icon: string,
    iconSize: number,
    iconMargin: number,
    textExtend: boolean,
    iconPosition: IconPosition,
}

// RFText
export class RFText extends React.Component<RFTextProps & TextProps & TouchableOpacityProps> {
}

// RFView
export class RFView extends React.Component<TouchableOpacityProps> {
}

// RFTouch
export class RFTouch extends React.Component<TouchableOpacityProps> {
}

export interface RFlatListProps {
    onLoadMore?: Function,
    noDataText?: string,
    noDataImage?: boolean,
    indicatorOffset?: number,
    refreshStatus?: object,
    emptyViewHeight: number,
}

// RFlatList
export class RFlatList extends React.Component<RFlatListProps & FlatListProps<any>> {
}
