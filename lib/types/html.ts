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

/** html */ export type HTML_HtmlProps = HtmlHTMLAttributes<HTMLHtmlElement>;

/** base */ export type HTML_BaseProps = BaseHTMLAttributes<HTMLBaseElement>;
/** head */ export type HTML_HeadProps = HTMLAttributes<HTMLHeadElement>;
/** link */ export type HTML_LinkProps = LinkHTMLAttributes<HTMLLinkElement>;
/** meta */ export type HTML_MetaProps = MetaHTMLAttributes<HTMLMetaElement>;
/** style */ export type HTML_StyleProps = StyleHTMLAttributes<HTMLStyleElement>;
/** title */ export type HTML_TitleProps = HTMLAttributes<HTMLTitleElement>;

/** body */ export type HTML_BodyProps = HTMLAttributes<HTMLBodyElement>;

/** address */ export type HTML_AddressProps = HTMLElementProps;
/** article */ export type HTML_ArticleProps = HTMLElementProps;
/** aside */ export type HTML_AsideProps = HTMLElementProps;
/** footer */ export type HTML_FooterProps = HTMLElementProps;
/** h1, h2, h3, h4, h5, h6 */ export type HTML_HeadingProps = HTMLAttributes<HTMLHeadingElement>;
/** header */ export type HTML_HeaderProps = HTMLElementProps;
/** hgroup */ export type HTML_HeadingGroupProps = HTMLElementProps;
/** main */ export type HTML_MainProps = HTMLElementProps;
/** nav */ export type HTML_NavProps = HTMLElementProps;
/** search */ export type HTML_SearchProps = HTMLElementProps;
/** section */ export type HTML_SectionProps = HTMLElementProps;

/** blockquote */ export type HTML_BlockQuoteProps = BlockquoteHTMLAttributes<HTMLQuoteElement>;
/** dd */ export type HTML_DescriptionProps = HTMLElementProps;
/** div */ export type HTML_DivProps = HTMLAttributes<HTMLDivElement>;
/** dl */ export type HTML_DescriptionListProps = HTMLAttributes<HTMLDListElement>;
/** dt */ export type HTML_DescriptionTermProps = HTMLElementProps;
/** figcaption */ export type HTML_FigCaptionProps = HTMLElementProps;
/** figure */ export type HTML_FigureProps = HTMLElementProps;
/** hr */ export type HTML_HorizontalRuleProps = HTMLAttributes<HTMLHRElement>;
/** li */ export type HTML_ListItemProps = LiHTMLAttributes<HTMLLIElement>;
/** menu */ export type HTML_MenuProps = MenuHTMLAttributes<HTMLElement>;
/** ol */ export type HTML_OrderedListProps = OlHTMLAttributes<HTMLOListElement>;
/** p */ export type HTMLParagraphProps = HTMLAttributes<HTMLParagraphElement>;
/** pre */ export type HTML_PreformParagraphProps = HTMLAttributes<HTMLPreElement>;
/** ul */ export type HTML_UnorderedListProps = HTMLAttributes<HTMLUListElement>;

/** a */ export type HTML_AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;
/** abbr */ export type HTML_AbbreviationProps = HTMLElementProps;
/** b */ export type HTML_BoldProps = HTMLElementProps;
/** bdi */ export type HTML_BidirectionalProps = HTMLElementProps;
/** bdo */ export type HTML_BidirectionalOverrideProps = HTMLElementProps;
/** br */ export type HTML_LineBreakProps = HTMLAttributes<HTMLBRElement>;
/** cite */ export type HTML_CiteProps = HTMLElementProps;
/** code */ export type HTML_CodeProps = HTMLElementProps;
/** data */ export type HTML_DataProps = DataHTMLAttributes<HTMLDataElement>;
/** dfn */ export type HTML_DefinitionProps = HTMLElementProps;
/** em */ export type HTML_EmphasisProps = HTMLElementProps;
/** i */ export type HTML_IdiomaticTextProps = HTMLElementProps;
/** kbd */ export type HTML_KeyboardProps = HTMLElementProps;
/** mark */ export type HTML_MarkProps = HTMLElementProps;
/** q */ export type HTML_QuoteProps = QuoteHTMLAttributes<HTMLQuoteElement>;
/** rp */ export type HTML_RubyParenthesisProps = HTMLElementProps;
/** rt */ export type HTML_RubyTextProps = HTMLElementProps;
/** ruby */ export type HTML_RubyProps = HTMLElementProps;
/** s */ export type HTML_StrikethroughProps = HTMLElementProps;
/** samp */ export type HTML_SampleProps = HTMLElementProps;
/** small */ export type HTML_SmallProps = HTMLElementProps;
/** span */ export type HTML_SpanProps = HTMLAttributes<HTMLSpanElement>;
/** strong */ export type HTML_StrongProps = HTMLElementProps;
/** sub */ export type HTML_SubProps = HTMLElementProps;
/** sup */ export type HTML_SupProps = HTMLElementProps;
/** time */ export type HTML_TimeProps = TimeHTMLAttributes<HTMLTimeElement>;
/** u */ export type HTML_UnderlineProps = HTMLElementProps;
/** var */ export type HTML_VarProps = HTMLElementProps;
/** wbr */ export type HTML_WordbreakProps = HTMLElementProps;

/** area */ export type HTML_AreaProps = AreaHTMLAttributes<HTMLAreaElement>;
/** audio */ export type HTML_AudioProps = AudioHTMLAttributes<HTMLAudioElement>;
/** img */ export type HTML_ImageProps = ImgHTMLAttributes<HTMLImageElement>;
/** map */ export type HTML_MapProps = MapHTMLAttributes<HTMLMapElement>;
/** track */ export type HTML_TrackProps = TrackHTMLAttributes<HTMLTrackElement>;
/** video */ export type HTML_VideoProps = VideoHTMLAttributes<HTMLVideoElement>;

/** embed */ export type HTML_EmbedProps = EmbedHTMLAttributes<HTMLEmbedElement>;
/** iframe */ export type HTML_IFrameProps = IframeHTMLAttributes<HTMLIFrameElement>;
/** object */ export type HTML_ObjectProps = ObjectHTMLAttributes<HTMLObjectElement>;
/** picture */ export type HTML_PictureProps = HTMLElementProps;
/** portal */
/** source */ export type HTML_SourceProps = SourceHTMLAttributes<HTMLSourceElement>;

/** svg */ export type HTML_SVGProps = SVGProps<SVGSVGElement>;
/** math */

/** canvas */ export type HTML_CanvasProps = CanvasHTMLAttributes<HTMLCanvasElement>;
/** noscript */ export type HTML_NoScriptProps = HTMLElementProps;
/** script */ export type HTML_ScriptProps = ScriptHTMLAttributes<HTMLScriptElement>;

/** del */ export type HTML_DeletedProps = DelHTMLAttributes<HTMLModElement>;
/** ins */ export type HTML_InsertedProps = InsHTMLAttributes<HTMLModElement>;

/** caption */ export type HTML_CaptionProps = HTMLElementProps;
/** col */ export type HTML_ColumnProps = ColHTMLAttributes<HTMLTableColElement>;
/** colgroup */ export type HTML_ColumnGroupProps = ColgroupHTMLAttributes<HTMLTableColElement>;
/** table */ export type HTML_TableProps = TableHTMLAttributes<HTMLTableElement>;
/** tbody */ export type HTML_TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;
/** td */ export type HTML_TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;
/** tfoot */ export type HTML_TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;
/** th */ export type HTML_TableHeaderCellProps = ThHTMLAttributes<HTMLTableCellElement>;
/** thead */ export type HTML_TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;
/** tr */ export type HTML_TableRowProps = HTMLAttributes<HTMLTableRowElement>;

/** button */ export type HTML_ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
/** datalist */ export type HTML_DataListProps = HTMLAttributes<HTMLDataListElement>;
/** fieldset */ export type HTML_FieldSetProps = FieldsetHTMLAttributes<HTMLFieldSetElement>;
/** form */ export type HTML_FormProps = FormHTMLAttributes<HTMLFormElement>;
/** input */ export type HTML_InputProps = InputHTMLAttributes<HTMLInputElement>;
/** label */ export type HTML_LabelProps = LabelHTMLAttributes<HTMLLabelElement>;
/** legend */ export type HTML_LegendProps = HTMLAttributes<HTMLLegendElement>;
/** meter */ export type HTML_MeterProps = MeterHTMLAttributes<HTMLMeterElement>;
/** optgroup */ export type HTML_OptionGroupProps = OptgroupHTMLAttributes<HTMLOptGroupElement>;
/** option */ export type HTML_OptionProps = OptionHTMLAttributes<HTMLOptionElement>;
/** output */ export type HTML_OutputProps = OutputHTMLAttributes<HTMLOutputElement>;
/** progress */ export type HTML_ProgressProps = ProgressHTMLAttributes<HTMLProgressElement>;
/** select */ export type HTML_SelectProps = SelectHTMLAttributes<HTMLSelectElement>;
/** textarea */ export type HTML_TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

/** details */ export type HTML_DetailsProps = DetailsHTMLAttributes<HTMLDetailsElement>;
/** dialog */ export type HTML_DialogProps = DialogHTMLAttributes<HTMLDialogElement>;
/** summary */ export type HTML_SummaryProps = HTMLElementProps;

/** slot */ export type HTML_SlotProps = SlotHTMLAttributes<HTMLSlotElement>;
/** template */ export type HTML_TemplateProps = HTMLAttributes<HTMLTemplateElement>;