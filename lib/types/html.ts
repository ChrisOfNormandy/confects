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
    VideoHTMLAttributes
} from 'react';

export type HTMLElementProps = HTMLAttributes<HTMLElement>

export function isInterfaceTypeIterable<T = unknown>(i: T | Iterable<T>): i is Iterable<T> {
    return Symbol.iterator in (i as Iterable<T>);
}

/** Html */ export type HTML_HtmlProps = HtmlHTMLAttributes<HTMLHtmlElement>;

/** Base */ export type HTML_BaseProps = BaseHTMLAttributes<HTMLBaseElement>;
/** Head */ export type HTML_HeadProps = HTMLAttributes<HTMLHeadElement>;
/** Link */ export type HTML_LinkProps = LinkHTMLAttributes<HTMLLinkElement>;
/** Meta */ export type HTML_MetaProps = MetaHTMLAttributes<HTMLMetaElement>;
/** Style */ export type HTML_StyleProps = StyleHTMLAttributes<HTMLStyleElement>;
/** Title */ export type HTML_TitleProps = HTMLAttributes<HTMLTitleElement>;

/** Body */ export type HTML_BodyProps = HTMLAttributes<HTMLBodyElement>;

/** Address */ export type HTML_AddressProps = HTMLElementProps;
/** Article */ export type HTML_ArticleProps = HTMLElementProps;
/** Aside */ export type HTML_AsideProps = HTMLElementProps;
/** Footer */ export type HTML_FooterProps = HTMLElementProps;
/** H1, h2, h3, h4, h5, h6 */ export type HTML_HeadingProps = HTMLAttributes<HTMLHeadingElement>;
/** Header */ export type HTML_HeaderProps = HTMLElementProps;
/** Hgroup */ export type HTML_HeadingGroupProps = HTMLElementProps;
/** Main */ export type HTML_MainProps = HTMLElementProps;
/** Nav */ export type HTML_NavProps = HTMLElementProps;
/** Search */ export type HTML_SearchProps = HTMLElementProps;
/** Section */ export type HTML_SectionProps = HTMLElementProps;

/** Blockquote */ export type HTML_BlockQuoteProps = BlockquoteHTMLAttributes<HTMLQuoteElement>;
/** Dd */ export type HTML_DescriptionProps = HTMLElementProps;
/** Div */ export type HTML_DivProps = HTMLAttributes<HTMLDivElement>;
/** Dl */ export type HTML_DescriptionListProps = HTMLAttributes<HTMLDListElement>;
/** Dt */ export type HTML_DescriptionTermProps = HTMLElementProps;
/** Figcaption */ export type HTML_FigCaptionProps = HTMLElementProps;
/** Figure */ export type HTML_FigureProps = HTMLElementProps;
/** Hr */ export type HTML_HorizontalRuleProps = HTMLAttributes<HTMLHRElement>;
/** Li */ export type HTML_ListItemProps = LiHTMLAttributes<HTMLLIElement>;
/** Menu */ export type HTML_MenuProps = MenuHTMLAttributes<HTMLElement>;
/** Ol */ export type HTML_OrderedListProps = OlHTMLAttributes<HTMLOListElement>;
/** P */ export type HTMLParagraphProps = HTMLAttributes<HTMLParagraphElement>;
/** Pre */ export type HTML_PreformParagraphProps = HTMLAttributes<HTMLPreElement>;
/** Ul */ export type HTML_UnorderedListProps = HTMLAttributes<HTMLUListElement>;

/** A */ export type HTML_AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
/** Abbr */ export type HTML_AbbreviationProps = HTMLElementProps;
/** B */ export type HTML_BoldProps = HTMLElementProps;
/** Bdi */ export type HTML_BidirectionalProps = HTMLElementProps;
/** Bdo */ export type HTML_BidirectionalOverrideProps = HTMLElementProps;
/** Br */ export type HTML_LineBreakProps = HTMLAttributes<HTMLBRElement>;
/** Cite */ export type HTML_CiteProps = HTMLElementProps;
/** Code */ export type HTML_CodeProps = HTMLElementProps;
/** Data */ export type HTML_DataProps = DataHTMLAttributes<HTMLDataElement>;
/** Dfn */ export type HTML_DefinitionProps = HTMLElementProps;
/** Em */ export type HTML_EmphasisProps = HTMLElementProps;
/** I */ export type HTML_IdiomaticTextProps = HTMLElementProps;
/** Kbd */ export type HTML_KeyboardProps = HTMLElementProps;
/** Mark */ export type HTML_MarkProps = HTMLElementProps;
/** Q */ export type HTML_QuoteProps = QuoteHTMLAttributes<HTMLQuoteElement>;
/** Rp */ export type HTML_RubyParenthesisProps = HTMLElementProps;
/** Rt */ export type HTML_RubyTextProps = HTMLElementProps;
/** Ruby */ export type HTML_RubyProps = HTMLElementProps;
/** S */ export type HTML_StrikethroughProps = HTMLElementProps;
/** Samp */ export type HTML_SampleProps = HTMLElementProps;
/** Small */ export type HTML_SmallProps = HTMLElementProps;
/** Span */ export type HTML_SpanProps = HTMLAttributes<HTMLSpanElement>;
/** Strong */ export type HTML_StrongProps = HTMLElementProps;
/** Sub */ export type HTML_SubProps = HTMLElementProps;
/** Sup */ export type HTML_SupProps = HTMLElementProps;
/** Time */ export type HTML_TimeProps = TimeHTMLAttributes<HTMLTimeElement>;
/** U */ export type HTML_UnderlineProps = HTMLElementProps;
/** Var */ export type HTML_VarProps = HTMLElementProps;
/** Wbr */ export type HTML_WordbreakProps = HTMLElementProps;

/** Area */ export type HTML_AreaProps = AreaHTMLAttributes<HTMLAreaElement>;
/** Audio */ export type HTML_AudioProps = AudioHTMLAttributes<HTMLAudioElement>;
/** Img */ export type HTML_ImageProps = ImgHTMLAttributes<HTMLImageElement>;
/** Map */ export type HTML_MapProps = MapHTMLAttributes<HTMLMapElement>;
/** Track */ export type HTML_TrackProps = TrackHTMLAttributes<HTMLTrackElement>;
/** Video */ export type HTML_VideoProps = VideoHTMLAttributes<HTMLVideoElement>;

/** Embed */ export type HTML_EmbedProps = EmbedHTMLAttributes<HTMLEmbedElement>;
/** Iframe */ export type HTML_IFrameProps = IframeHTMLAttributes<HTMLIFrameElement>;
/** Object */ export type HTML_ObjectProps = ObjectHTMLAttributes<HTMLObjectElement>;
/** Picture */ export type HTML_PictureProps = HTMLElementProps;
/** Portal */
/** Source */ export type HTML_SourceProps = SourceHTMLAttributes<HTMLSourceElement>;

/** Svg */ export type HTML_SVGProps = SVGProps<SVGSVGElement>;
/** Math */

/** Canvas */ export type HTML_CanvasProps = CanvasHTMLAttributes<HTMLCanvasElement>;
/** Noscript */ export type HTML_NoScriptProps = HTMLElementProps;
/** Script */ export type HTML_ScriptProps = ScriptHTMLAttributes<HTMLScriptElement>;

/** Del */ export type HTML_DeletedProps = DelHTMLAttributes<HTMLModElement>;
/** Ins */ export type HTML_InsertedProps = InsHTMLAttributes<HTMLModElement>;

/** Caption */ export type HTML_CaptionProps = HTMLElementProps;
/** Col */ export type HTML_ColumnProps = ColHTMLAttributes<HTMLTableColElement>;
/** Colgroup */ export type HTML_ColumnGroupProps = ColgroupHTMLAttributes<HTMLTableColElement>;
/** Table */ export type HTML_TableProps = TableHTMLAttributes<HTMLTableElement>;
/** Tbody */ export type HTML_TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;
/** Td */ export type HTML_TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
/** Tfoot */ export type HTML_TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;
/** Th */ export type HTML_TableHeaderCellProps = ThHTMLAttributes<HTMLTableCellElement>;
/** Thead */ export type HTML_TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;
/** Tr */ export type HTML_TableRowProps = HTMLAttributes<HTMLTableRowElement>;

/** Button */ export type HTML_ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
/** Datalist */ export type HTML_DataListProps = HTMLAttributes<HTMLDataListElement>;
/** Fieldset */ export type HTML_FieldSetProps = FieldsetHTMLAttributes<HTMLFieldSetElement>;
/** Form */ export type HTML_FormProps = FormHTMLAttributes<HTMLFormElement>;
/** Input */ export type HTML_InputProps = InputHTMLAttributes<HTMLInputElement>;
/** Label */ export type HTML_LabelProps = LabelHTMLAttributes<HTMLLabelElement>;
/** Legend */ export type HTML_LegendProps = HTMLAttributes<HTMLLegendElement>;
/** Meter */ export type HTML_MeterProps = MeterHTMLAttributes<HTMLMeterElement>;
/** Optgroup */ export type HTML_OptionGroupProps = OptgroupHTMLAttributes<HTMLOptGroupElement>;
/** Option */ export type HTML_OptionProps = OptionHTMLAttributes<HTMLOptionElement>;
/** Output */ export type HTML_OutputProps = OutputHTMLAttributes<HTMLOutputElement>;
/** Progress */ export type HTML_ProgressProps = ProgressHTMLAttributes<HTMLProgressElement>;
/** Select */ export type HTML_SelectProps = SelectHTMLAttributes<HTMLSelectElement>;
/** Textarea */ export type HTML_TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

/** Details */ export type HTML_DetailsProps = DetailsHTMLAttributes<HTMLDetailsElement>;
/** Dialog */ export type HTML_DialogProps = DialogHTMLAttributes<HTMLDialogElement>;
/** Summary */ export type HTML_SummaryProps = HTMLElementProps;

/** Slot */ export type HTML_SlotProps = SlotHTMLAttributes<HTMLSlotElement>;
/** Template */ export type HTML_TemplateProps = HTMLAttributes<HTMLTemplateElement>;