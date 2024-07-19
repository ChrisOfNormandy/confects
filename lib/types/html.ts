import {
    AnchorHTMLAttributes,
    AreaHTMLAttributes,
    AudioHTMLAttributes,
    BaseHTMLAttributes,
    BlockquoteHTMLAttributes,
    ButtonHTMLAttributes,
    CanvasHTMLAttributes,
    ColgroupHTMLAttributes,
    ColHTMLAttributes,
    DataHTMLAttributes,
    DelHTMLAttributes,
    DetailedHTMLProps,
    DetailsHTMLAttributes,
    DialogHTMLAttributes,
    EmbedHTMLAttributes,
    FieldsetHTMLAttributes,
    FormHTMLAttributes,
    HTMLAttributes,
    HtmlHTMLAttributes,
    IframeHTMLAttributes,
    ImgHTMLAttributes,
    InputHTMLAttributes,
    InsHTMLAttributes,
    LabelHTMLAttributes,
    LiHTMLAttributes,
    LinkHTMLAttributes,
    MapHTMLAttributes,
    MenuHTMLAttributes,
    MetaHTMLAttributes,
    MeterHTMLAttributes,
    ObjectHTMLAttributes,
    OlHTMLAttributes,
    OptgroupHTMLAttributes,
    OptionHTMLAttributes,
    OutputHTMLAttributes,
    ProgressHTMLAttributes,
    QuoteHTMLAttributes,
    ScriptHTMLAttributes,
    SelectHTMLAttributes,
    SlotHTMLAttributes,
    SourceHTMLAttributes,
    StyleHTMLAttributes,
    SVGProps,
    TableHTMLAttributes,
    TdHTMLAttributes,
    TextareaHTMLAttributes,
    ThHTMLAttributes,
    TimeHTMLAttributes,
    TrackHTMLAttributes,
    VideoHTMLAttributes,
} from "react";

/** html */ export type HTML_HtmlProps = DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;

/** base */ export type HTML_BaseProps = DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
/** head */ export type HTML_HeadProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
/** link */ export type HTML_LinkProps = DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
/** meta */ export type HTML_MetaProps = DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
/** style */ export type HTML_StyleProps = DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
/** title */ export type HTML_TitleProps = DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;

/** body */ export type HTML_BodyProps = DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;

/** address */ export type HTML_AddressProps = HTMLElementProps;
/** article */ export type HTML_ArticleProps = HTMLElementProps;
/** aside */ export type HTML_AsideProps = HTMLElementProps;
/** footer */ export type HTML_FooterProps = HTMLElementProps;
/** h1, h2, h3, h4, h5, h6 */ export type HTML_HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
/** header */ export type HTML_HeaderProps = HTMLElementProps;
/** hgroup */ export type HTML_HeadingGroupProps = HTMLElementProps;
/** main */ export type HTML_MainProps = HTMLElementProps;
/** nav */ export type HTML_NavProps = HTMLElementProps;
/** search */ export type HTML_SearchProps = HTMLElementProps;
/** section */ export type HTML_SectionProps = HTMLElementProps;

/** blockquote */ export type HTML_BlockQuoteProps = DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
/** dd */ export type HTML_DescriptionProps = HTMLElementProps;
/** div */ export type HTML_DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
/** dl */ export type HTML_DescriptionListProps = DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
/** dt */ export type HTML_DescriptionTermProps = HTMLElementProps;
/** figcaption */ export type HTML_FigCaptionProps = HTMLElementProps;
/** figure */ export type HTML_FigureProps = HTMLElementProps;
/** hr */ export type HTML_HorizontalRuleProps = DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
/** li */ export type HTML_ListItemProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
/** menu */ export type HTML_MenuProps = DetailedHTMLProps<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
/** ol */ export type HTML_OrderedListProps = DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
/** p */ export type HTMLParagraphProps = DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
/** pre */ export type HTML_PreformParagraphProps = DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
/** ul */ export type HTML_UnorderedListProps = DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;

/** a */ export type HTML_AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
/** abbr */ export type HTML_AbbreviationProps = HTMLElementProps;
/** b */ export type HTML_BoldProps = HTMLElementProps;
/** bdi */ export type HTML_BidirectionalProps = HTMLElementProps;
/** bdo */ export type HTML_BidirectionalOverrideProps = HTMLElementProps;
/** br */ export type HTML_LineBreakProps = DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
/** cite */ export type HTML_CiteProps = HTMLElementProps;
/** code */ export type HTML_CodeProps = HTMLElementProps;
/** data */ export type HTML_DataProps = DetailedHTMLProps<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>;
/** dfn */ export type HTML_DefinitionProps = HTMLElementProps;
/** em */ export type HTML_EmphasisProps = HTMLElementProps;
/** i */ export type HTML_IdiomaticTextProps = HTMLElementProps;
/** kbd */ export type HTML_KeyboardProps = HTMLElementProps;
/** mark */ export type HTML_MarkProps = HTMLElementProps;
/** q */ export type HTML_QuoteProps = DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
/** rp */ export type HTML_RubyParenthesisProps = HTMLElementProps;
/** rt */ export type HTML_RubyTextProps = HTMLElementProps;
/** ruby */ export type HTML_RubyProps = HTMLElementProps;
/** s */ export type HTML_StrikethroughProps = HTMLElementProps;
/** samp */ export type HTML_SampleProps = HTMLElementProps;
/** small */ export type HTML_SmallProps = HTMLElementProps;
/** span */ export type HTML_SpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
/** strong */ export type HTML_StrongProps = HTMLElementProps;
/** sub */ export type HTML_SubProps = HTMLElementProps;
/** sup */ export type HTML_SupProps = HTMLElementProps;
/** time */ export type HTML_TimeProps = DetailedHTMLProps<TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>;
/** u */ export type HTML_UnderlineProps = HTMLElementProps;
/** var */ export type HTML_VarProps = HTMLElementProps;
/** wbr */ export type HTML_WordbreakProps = HTMLElementProps;

/** area */ export type HTML_AreaProps = DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
/** audio */ export type HTML_AudioProps = DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
/** img */ export type HTML_ImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
/** map */ export type HTML_MapProps = DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
/** track */ export type HTML_TrackProps = DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
/** video */ export type HTML_VideoProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

/** embed */ export type HTML_EmbedProps = DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
/** iframe */ export type HTML_IFrameProps = DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
/** object */ export type HTML_ObjectProps = DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
/** picture */ export type HTML_PictureProps = HTMLElementProps;
/** portal */
/** source */ export type HTML_SourceProps = DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;

/** svg */ export type HTML_SVGProps = SVGProps<SVGSVGElement>;
/** math */

/** canvas */ export type HTML_CanvasProps = DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
/** noscript */ export type HTML_NoScriptProps = HTMLElementProps;
/** script */ export type HTML_ScriptProps = DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;

/** del */ export type HTML_DeletedProps = DetailedHTMLProps<DelHTMLAttributes<HTMLModElement>, HTMLModElement>;
/** ins */ export type HTML_InsertedProps = DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;

/** caption */ export type HTML_CaptionProps = HTMLElementProps;
/** col */ export type HTML_ColumnProps = DetailedHTMLProps<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
/** colgroup */ export type HTML_ColumnGroupProps = DetailedHTMLProps<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
/** table */ export type HTML_TableProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
/** tbody */ export type HTML_TableBodyProps = DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
/** td */ export type HTML_TableCellProps = DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
/** tfoot */ export type HTML_TableFooterProps = DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
/** th */ export type HTML_TableHeaderCellProps = DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement>;
/** thead */ export type HTML_TableHeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
/** tr */ export type HTML_TableRowProps = DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;

/** button */ export type HTML_ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
/** datalist */ export type HTML_DataListProps = DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
/** fieldset */ export type HTML_FieldSetProps = DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
/** form */ export type HTML_FormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
/** input */ export type HTML_InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
/** label */ export type HTML_LabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
/** legend */ export type HTML_LegendProps = DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
/** meter */ export type HTML_MeterProps = DetailedHTMLProps<MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>;
/** optgroup */ export type HTML_OptionGroupProps = DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
/** option */ export type HTML_OptionProps = DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
/** output */ export type HTML_OutputProps = DetailedHTMLProps<OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>;
/** progress */ export type HTML_ProgressProps = DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
/** select */ export type HTML_SelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
/** textarea */ export type HTML_TextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

/** details */ export type HTML_DetailsProps = DetailedHTMLProps<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>;
/** dialog */ export type HTML_DialogProps = DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>;
/** summary */ export type HTML_SummaryProps = HTMLElementProps;

/** slot */ export type HTML_SlotProps = DetailedHTMLProps<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>;
/** template */ export type HTML_TemplateProps = DetailedHTMLProps<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>;

export type HTMLElementProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export function isInterfaceTypeIterable<T = unknown>(i: T | Iterable<T>): i is Iterable<T> {
    return Symbol.iterator in (i as Iterable<T>);
};