import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { UnorderedList } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { useServices_sectionCb, useServices_wrapperCb, useFlex11Cb, useFlex12Cb, useDiv14Cb, useFlex15Cb, useDiv15Cb, useFlex16Cb, useDiv16Cb, useFlex20Cb, useTrusted_WrapperCb, useFlex10Cb, useProjects_sectionCb, useProjects_flexCb, useProjects_wrapperCb, useFlex22Cb, useFlex23Cb, useCard_WrapperCb, useProject_CardCb, useDiv22Cb, useTextCb, useFlex34Cb, useDiv25Cb, useFlex33Cb, useFlex36Cb, useDiv26Cb, useFlex35Cb, useNav_barCb, useNavbar_wrapperCb, useRightCb, useFlex108Cb, useFlex109Cb, useHero_SectionCb, useHero_section_wrapperCb, useContentCb, useDiv27Cb, useFlex110Cb, useImageCb, useBlog_SectionCb, useBlog_wrapperCb, useDiv29Cb, useFlex122Cb, useBlog_item_wrapperCb, useBlog_itemCb, useFlex111Cb, useFlex116Cb, useFlex45Cb, useFlex112Cb, useFlex118Cb, useFlex46Cb, useFlex113Cb, useFlex120Cb, useFlex47Cb, useFlex114Cb, useFlex119Cb, useFlex48Cb, useFlex115Cb, useFlex121Cb, useDesigner_SectionCb, useDesigner_wrapperCb, useFlex53Cb, useFlex51Cb, useFlex52Cb, useImages_wrapperCb, useFlex55Cb, useFlex56Cb, useEduWork_SectionCb, useEduWork_WrapperCb, useEdu_WrapperCb, useEdu_Item_WrapperCb, useEdu_ItemCb, useEdu_TitleCb, useFlex64Cb, useFlex65Cb, useFlex69Cb, useFlex68Cb, useFlex67Cb, useFlex66Cb, useFlex73Cb, useFlex71Cb, useFlex72Cb, useFlex70Cb, useWord_wrapperCb, useWork_wrapperCb, useWork_ItemCb, useWork_item_wrapperCb, useFlex95Cb, useFlex75Cb, useFlex74Cb, useFlex76Cb, useFlex101Cb, useFlex100Cb, useFlex99Cb, useFlex97Cb, useFlex98Cb, useFlex96Cb, useFlex107Cb, useFlex106Cb, useFlex105Cb, useFlex103Cb, useFlex104Cb, useFlex102Cb, useTestimonials_SectionCb, useTestimonials_wrapperCb, useFlex125Cb, useFlex126Cb, useFlex127Cb, useFlex128Cb, useFlex129Cb, useFAQ_SectionCb, useFAQ_WrapperCb, useFlex132Cb, useFAQ_Item_WrapperCb, useFAQ_LeftCb, useFAQ_ItemCb, useFlex162Cb, useFlex163Cb, useFlex164Cb, useFAQ_RightCb, useFlex165Cb, useFlex166Cb, useFlex167Cb, useFlex168Cb, useFlex161Cb, useLets_talkCb, useCall_wrapperCb, useFlex171Cb, useFlex177Cb, useFlex172Cb, useFlex173Cb, useFlex178Cb, useFlex179Cb, useFlex180Cb, useFlex181Cb, useDiv38Cb, useTextBox25Cb, useTextBox26Cb, useImage19Cb, useTextBox27Cb, useTextBox28Cb, useUnorderedList2Cb, useTextBox29Cb, useTextBox30Cb, useImage22Cb, useUnorderedList3Cb, useTextBox31Cb, useTextBox32Cb, useImage23Cb, useUnorderedList4Cb, useTextBox24Cb, useImage14Cb, useImage16Cb, useImage17Cb, useImage18Cb, useProject_TextCb, useTextBox34Cb, useTextBox54Cb, useButton5Cb, useImage24Cb, useView_projectCb, useHeadingCb, useCard_TitleCb, useImage27Cb, useTextBox47Cb, useTextBox48Cb, useTextBox49Cb, useImage28Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useServicesCb, useAboutCb, useProjectCb, useBlogCb, useBook_a_callCb, useImage50Cb, useTitleCb, useTextBox117Cb, useParagraphCb, useHeaderCb, useTextBox53Cb, useBook_ButtonCb, useTextBox118Cb, useImage52Cb, useImage1Cb, useTextBox55Cb, useTextBox56Cb, useTextBox57Cb, useImage66Cb, useDescCb, useDateCb, useImage53Cb, useTextBox119Cb, useReadCb, useImage59Cb, useTextBox68Cb, useTextBox120Cb, useImage54Cb, useTextBox121Cb, useImage62Cb, useTextBox132Cb, useTextBox71Cb, useTextBox122Cb, useImage55Cb, useTextBox123Cb, useImage64Cb, useTextBox134Cb, useTextBox74Cb, useTextBox124Cb, useImage56Cb, useTextBox125Cb, useTextBox133Cb, useImage63Cb, useTextBox77Cb, useTextBox126Cb, useImage57Cb, useTextBox127Cb, useTextBox135Cb, useImage65Cb, useTextBox79Cb, useTextBox80Cb, useTextBox81Cb, useImage29Cb, useImage30Cb, useImage31Cb, useImage32Cb, useTextBox82Cb, useTextBox84Cb, useImage46Cb, useTextBox85Cb, useTextBox86Cb, useImage40Cb, useTextBox90Cb, useImage38Cb, useTextBox89Cb, useTextBox88Cb, useImage41Cb, useTextBox92Cb, useImage39Cb, useTextBox93Cb, useTextBox91Cb, useImage42Cb, useTextBox83Cb, useImage33Cb, useTextBox95Cb, useTextBox94Cb, useImage44Cb, useTextBox96Cb, useImage47Cb, useImage35Cb, useTextBox111Cb, useImage51Cb, useTextBox112Cb, useTextBox110Cb, useImage45Cb, useImage36Cb, useTextBox114Cb, useImage37Cb, useTextBox115Cb, useTextBox113Cb, useImage43Cb, useTextBox136Cb, useTextBox137Cb, useCarousel1Cb, useImage67Cb, useTextBox138Cb, useTextBox139Cb, useTextBox140Cb, useButton6Cb, useButton7Cb, useTextBox151Cb, useImage74Cb, useImage88Cb, useTextBox167Cb, useTextBox168Cb, useImage89Cb, useTextBox169Cb, useImage90Cb, useImage91Cb, useTextBox170Cb, useTextBox171Cb, useImage92Cb, useTextBox172Cb, useImage93Cb, useTextBox173Cb, useImage94Cb, useTextBox141Cb, useTextBox142Cb, useTextBox174Cb, useTextBox175Cb, useTextBox180Cb, useTextBox179Cb, useTextBox181Cb, useTextBox178Cb, useImage95Cb, useTextBox188Cb, useTextBox189Cb, useTextBox190Cb, useTextBox191Cb, useTextBox192Cb, useTextBox193Cb, useTextBox194Cb, useTextBox195Cb, useTextBox196Cb, useTextBox197Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Services_sectionProps = useStore((state)=>state["Home"]["Services_section"]);
const Services_sectionIoProps = useIoStore((state)=>state["Home"]["Services_section"]);
const Services_sectionCb = useServices_sectionCb()
const Services_wrapperProps = useStore((state)=>state["Home"]["Services_wrapper"]);
const Services_wrapperIoProps = useIoStore((state)=>state["Home"]["Services_wrapper"]);
const Services_wrapperCb = useServices_wrapperCb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Trusted_WrapperProps = useStore((state)=>state["Home"]["Trusted_Wrapper"]);
const Trusted_WrapperIoProps = useIoStore((state)=>state["Home"]["Trusted_Wrapper"]);
const Trusted_WrapperCb = useTrusted_WrapperCb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Projects_sectionProps = useStore((state)=>state["Home"]["Projects_section"]);
const Projects_sectionIoProps = useIoStore((state)=>state["Home"]["Projects_section"]);
const Projects_sectionCb = useProjects_sectionCb()
const Projects_flexProps = useStore((state)=>state["Home"]["Projects_flex"]);
const Projects_flexIoProps = useIoStore((state)=>state["Home"]["Projects_flex"]);
const Projects_flexCb = useProjects_flexCb()
const Projects_wrapperProps = useStore((state)=>state["Home"]["Projects_wrapper"]);
const Projects_wrapperIoProps = useIoStore((state)=>state["Home"]["Projects_wrapper"]);
const Projects_wrapperCb = useProjects_wrapperCb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex23Props = useStore((state)=>state["Home"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["Home"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Card_WrapperProps = useStore((state)=>state["Home"]["Card_Wrapper"]);
const Card_WrapperIoProps = useIoStore((state)=>state["Home"]["Card_Wrapper"]);
const Card_WrapperCb = useCard_WrapperCb()
const Project_CardProps = useStore((state)=>state["Home"]["Project_Card"]);
const Project_CardIoProps = useIoStore((state)=>state["Home"]["Project_Card"]);
const Project_CardCb = useProject_CardCb()
const Div22Props = useStore((state)=>state["Home"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Home"]["Div22"]);
const Div22Cb = useDiv22Cb()
const TextProps = useStore((state)=>state["Home"]["Text"]);
const TextIoProps = useIoStore((state)=>state["Home"]["Text"]);
const TextCb = useTextCb()
const Flex34Props = useStore((state)=>state["Home"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Home"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Div25Props = useStore((state)=>state["Home"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Home"]["Div25"]);
const Div25Cb = useDiv25Cb()
const Flex33Props = useStore((state)=>state["Home"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Home"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Nav_barProps = useStore((state)=>state["Home"]["Nav_bar"]);
const Nav_barIoProps = useIoStore((state)=>state["Home"]["Nav_bar"]);
const Nav_barCb = useNav_barCb()
const Navbar_wrapperProps = useStore((state)=>state["Home"]["Navbar_wrapper"]);
const Navbar_wrapperIoProps = useIoStore((state)=>state["Home"]["Navbar_wrapper"]);
const Navbar_wrapperCb = useNavbar_wrapperCb()
const RightProps = useStore((state)=>state["Home"]["Right"]);
const RightIoProps = useIoStore((state)=>state["Home"]["Right"]);
const RightCb = useRightCb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex109Props = useStore((state)=>state["Home"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Home"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Hero_SectionProps = useStore((state)=>state["Home"]["Hero_Section"]);
const Hero_SectionIoProps = useIoStore((state)=>state["Home"]["Hero_Section"]);
const Hero_SectionCb = useHero_SectionCb()
const Hero_section_wrapperProps = useStore((state)=>state["Home"]["Hero_section_wrapper"]);
const Hero_section_wrapperIoProps = useIoStore((state)=>state["Home"]["Hero_section_wrapper"]);
const Hero_section_wrapperCb = useHero_section_wrapperCb()
const ContentProps = useStore((state)=>state["Home"]["Content"]);
const ContentIoProps = useIoStore((state)=>state["Home"]["Content"]);
const ContentCb = useContentCb()
const Div27Props = useStore((state)=>state["Home"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Home"]["Div27"]);
const Div27Cb = useDiv27Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const ImageProps = useStore((state)=>state["Home"]["Image"]);
const ImageIoProps = useIoStore((state)=>state["Home"]["Image"]);
const ImageCb = useImageCb()
const Blog_SectionProps = useStore((state)=>state["Home"]["Blog_Section"]);
const Blog_SectionIoProps = useIoStore((state)=>state["Home"]["Blog_Section"]);
const Blog_SectionCb = useBlog_SectionCb()
const Blog_wrapperProps = useStore((state)=>state["Home"]["Blog_wrapper"]);
const Blog_wrapperIoProps = useIoStore((state)=>state["Home"]["Blog_wrapper"]);
const Blog_wrapperCb = useBlog_wrapperCb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Blog_item_wrapperProps = useStore((state)=>state["Home"]["Blog_item_wrapper"]);
const Blog_item_wrapperIoProps = useIoStore((state)=>state["Home"]["Blog_item_wrapper"]);
const Blog_item_wrapperCb = useBlog_item_wrapperCb()
const Blog_itemProps = useStore((state)=>state["Home"]["Blog_item"]);
const Blog_itemIoProps = useIoStore((state)=>state["Home"]["Blog_item"]);
const Blog_itemCb = useBlog_itemCb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Designer_SectionProps = useStore((state)=>state["Home"]["Designer_Section"]);
const Designer_SectionIoProps = useIoStore((state)=>state["Home"]["Designer_Section"]);
const Designer_SectionCb = useDesigner_SectionCb()
const Designer_wrapperProps = useStore((state)=>state["Home"]["Designer_wrapper"]);
const Designer_wrapperIoProps = useIoStore((state)=>state["Home"]["Designer_wrapper"]);
const Designer_wrapperCb = useDesigner_wrapperCb()
const Flex53Props = useStore((state)=>state["Home"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Home"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Images_wrapperProps = useStore((state)=>state["Home"]["Images_wrapper"]);
const Images_wrapperIoProps = useIoStore((state)=>state["Home"]["Images_wrapper"]);
const Images_wrapperCb = useImages_wrapperCb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const EduWork_SectionProps = useStore((state)=>state["Home"]["EduWork_Section"]);
const EduWork_SectionIoProps = useIoStore((state)=>state["Home"]["EduWork_Section"]);
const EduWork_SectionCb = useEduWork_SectionCb()
const EduWork_WrapperProps = useStore((state)=>state["Home"]["EduWork_Wrapper"]);
const EduWork_WrapperIoProps = useIoStore((state)=>state["Home"]["EduWork_Wrapper"]);
const EduWork_WrapperCb = useEduWork_WrapperCb()
const Edu_WrapperProps = useStore((state)=>state["Home"]["Edu_Wrapper"]);
const Edu_WrapperIoProps = useIoStore((state)=>state["Home"]["Edu_Wrapper"]);
const Edu_WrapperCb = useEdu_WrapperCb()
const Edu_Item_WrapperProps = useStore((state)=>state["Home"]["Edu_Item_Wrapper"]);
const Edu_Item_WrapperIoProps = useIoStore((state)=>state["Home"]["Edu_Item_Wrapper"]);
const Edu_Item_WrapperCb = useEdu_Item_WrapperCb()
const Edu_ItemProps = useStore((state)=>state["Home"]["Edu_Item"]);
const Edu_ItemIoProps = useIoStore((state)=>state["Home"]["Edu_Item"]);
const Edu_ItemCb = useEdu_ItemCb()
const Edu_TitleProps = useStore((state)=>state["Home"]["Edu_Title"]);
const Edu_TitleIoProps = useIoStore((state)=>state["Home"]["Edu_Title"]);
const Edu_TitleCb = useEdu_TitleCb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Word_wrapperProps = useStore((state)=>state["Home"]["Word_wrapper"]);
const Word_wrapperIoProps = useIoStore((state)=>state["Home"]["Word_wrapper"]);
const Word_wrapperCb = useWord_wrapperCb()
const Work_wrapperProps = useStore((state)=>state["Home"]["Work_wrapper"]);
const Work_wrapperIoProps = useIoStore((state)=>state["Home"]["Work_wrapper"]);
const Work_wrapperCb = useWork_wrapperCb()
const Work_ItemProps = useStore((state)=>state["Home"]["Work_Item"]);
const Work_ItemIoProps = useIoStore((state)=>state["Home"]["Work_Item"]);
const Work_ItemCb = useWork_ItemCb()
const Work_item_wrapperProps = useStore((state)=>state["Home"]["Work_item_wrapper"]);
const Work_item_wrapperIoProps = useIoStore((state)=>state["Home"]["Work_item_wrapper"]);
const Work_item_wrapperCb = useWork_item_wrapperCb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Testimonials_SectionProps = useStore((state)=>state["Home"]["Testimonials_Section"]);
const Testimonials_SectionIoProps = useIoStore((state)=>state["Home"]["Testimonials_Section"]);
const Testimonials_SectionCb = useTestimonials_SectionCb()
const Testimonials_wrapperProps = useStore((state)=>state["Home"]["Testimonials_wrapper"]);
const Testimonials_wrapperIoProps = useIoStore((state)=>state["Home"]["Testimonials_wrapper"]);
const Testimonials_wrapperCb = useTestimonials_wrapperCb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex126Props = useStore((state)=>state["Home"]["Flex126"]);
const Flex126IoProps = useIoStore((state)=>state["Home"]["Flex126"]);
const Flex126Cb = useFlex126Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const FAQ_SectionProps = useStore((state)=>state["Home"]["FAQ_Section"]);
const FAQ_SectionIoProps = useIoStore((state)=>state["Home"]["FAQ_Section"]);
const FAQ_SectionCb = useFAQ_SectionCb()
const FAQ_WrapperProps = useStore((state)=>state["Home"]["FAQ_Wrapper"]);
const FAQ_WrapperIoProps = useIoStore((state)=>state["Home"]["FAQ_Wrapper"]);
const FAQ_WrapperCb = useFAQ_WrapperCb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const FAQ_Item_WrapperProps = useStore((state)=>state["Home"]["FAQ_Item_Wrapper"]);
const FAQ_Item_WrapperIoProps = useIoStore((state)=>state["Home"]["FAQ_Item_Wrapper"]);
const FAQ_Item_WrapperCb = useFAQ_Item_WrapperCb()
const FAQ_LeftProps = useStore((state)=>state["Home"]["FAQ_Left"]);
const FAQ_LeftIoProps = useIoStore((state)=>state["Home"]["FAQ_Left"]);
const FAQ_LeftCb = useFAQ_LeftCb()
const FAQ_ItemProps = useStore((state)=>state["Home"]["FAQ_Item"]);
const FAQ_ItemIoProps = useIoStore((state)=>state["Home"]["FAQ_Item"]);
const FAQ_ItemCb = useFAQ_ItemCb()
const Flex162Props = useStore((state)=>state["Home"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Home"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex163Props = useStore((state)=>state["Home"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Home"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex164Props = useStore((state)=>state["Home"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["Home"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const FAQ_RightProps = useStore((state)=>state["Home"]["FAQ_Right"]);
const FAQ_RightIoProps = useIoStore((state)=>state["Home"]["FAQ_Right"]);
const FAQ_RightCb = useFAQ_RightCb()
const Flex165Props = useStore((state)=>state["Home"]["Flex165"]);
const Flex165IoProps = useIoStore((state)=>state["Home"]["Flex165"]);
const Flex165Cb = useFlex165Cb()
const Flex166Props = useStore((state)=>state["Home"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["Home"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Flex167Props = useStore((state)=>state["Home"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["Home"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const Flex168Props = useStore((state)=>state["Home"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["Home"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex161Props = useStore((state)=>state["Home"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Home"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Lets_talkProps = useStore((state)=>state["Home"]["Lets_talk"]);
const Lets_talkIoProps = useIoStore((state)=>state["Home"]["Lets_talk"]);
const Lets_talkCb = useLets_talkCb()
const Call_wrapperProps = useStore((state)=>state["Home"]["Call_wrapper"]);
const Call_wrapperIoProps = useIoStore((state)=>state["Home"]["Call_wrapper"]);
const Call_wrapperCb = useCall_wrapperCb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex177Props = useStore((state)=>state["Home"]["Flex177"]);
const Flex177IoProps = useIoStore((state)=>state["Home"]["Flex177"]);
const Flex177Cb = useFlex177Cb()
const Flex172Props = useStore((state)=>state["Home"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["Home"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex173Props = useStore((state)=>state["Home"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["Home"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex178Props = useStore((state)=>state["Home"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["Home"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Flex179Props = useStore((state)=>state["Home"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["Home"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const Flex180Props = useStore((state)=>state["Home"]["Flex180"]);
const Flex180IoProps = useIoStore((state)=>state["Home"]["Flex180"]);
const Flex180Cb = useFlex180Cb()
const Flex181Props = useStore((state)=>state["Home"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["Home"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const Div38Props = useStore((state)=>state["Home"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["Home"]["Div38"]);
const Div38Cb = useDiv38Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const UnorderedList2Props = useStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2IoProps = useIoStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2Cb = useUnorderedList2Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const UnorderedList3Props = useStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3IoProps = useIoStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3Cb = useUnorderedList3Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const UnorderedList4Props = useStore((state)=>state["Home"]["UnorderedList4"]);
const UnorderedList4IoProps = useIoStore((state)=>state["Home"]["UnorderedList4"]);
const UnorderedList4Cb = useUnorderedList4Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const Project_TextProps = useStore((state)=>state["Home"]["Project_Text"]);
const Project_TextIoProps = useIoStore((state)=>state["Home"]["Project_Text"]);
const Project_TextCb = useProject_TextCb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Button5Props = useStore((state)=>state["Home"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["Home"]["Button5"]);
const Button5Cb = useButton5Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const View_projectProps = useStore((state)=>state["Home"]["View_project"]);
const View_projectIoProps = useIoStore((state)=>state["Home"]["View_project"]);
const View_projectCb = useView_projectCb()
const HeadingProps = useStore((state)=>state["Home"]["Heading"]);
const HeadingIoProps = useIoStore((state)=>state["Home"]["Heading"]);
const HeadingCb = useHeadingCb()
const Card_TitleProps = useStore((state)=>state["Home"]["Card_Title"]);
const Card_TitleIoProps = useIoStore((state)=>state["Home"]["Card_Title"]);
const Card_TitleCb = useCard_TitleCb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const ServicesProps = useStore((state)=>state["Home"]["Services"]);
const ServicesIoProps = useIoStore((state)=>state["Home"]["Services"]);
const ServicesCb = useServicesCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const ProjectProps = useStore((state)=>state["Home"]["Project"]);
const ProjectIoProps = useIoStore((state)=>state["Home"]["Project"]);
const ProjectCb = useProjectCb()
const BlogProps = useStore((state)=>state["Home"]["Blog"]);
const BlogIoProps = useIoStore((state)=>state["Home"]["Blog"]);
const BlogCb = useBlogCb()
const Book_a_callProps = useStore((state)=>state["Home"]["Book_a_call"]);
const Book_a_callIoProps = useIoStore((state)=>state["Home"]["Book_a_call"]);
const Book_a_callCb = useBook_a_callCb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const TitleProps = useStore((state)=>state["Home"]["Title"]);
const TitleIoProps = useIoStore((state)=>state["Home"]["Title"]);
const TitleCb = useTitleCb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const ParagraphProps = useStore((state)=>state["Home"]["Paragraph"]);
const ParagraphIoProps = useIoStore((state)=>state["Home"]["Paragraph"]);
const ParagraphCb = useParagraphCb()
const HeaderProps = useStore((state)=>state["Home"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["Home"]["Header"]);
const HeaderCb = useHeaderCb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Book_ButtonProps = useStore((state)=>state["Home"]["Book_Button"]);
const Book_ButtonIoProps = useIoStore((state)=>state["Home"]["Book_Button"]);
const Book_ButtonCb = useBook_ButtonCb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image1Props = useStore((state)=>state["Home"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Home"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const DescProps = useStore((state)=>state["Home"]["Desc"]);
const DescIoProps = useIoStore((state)=>state["Home"]["Desc"]);
const DescCb = useDescCb()
const DateProps = useStore((state)=>state["Home"]["Date"]);
const DateIoProps = useIoStore((state)=>state["Home"]["Date"]);
const DateCb = useDateCb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const ReadProps = useStore((state)=>state["Home"]["Read"]);
const ReadIoProps = useIoStore((state)=>state["Home"]["Read"]);
const ReadCb = useReadCb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const TextBox68Props = useStore((state)=>state["Home"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Home"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox71Props = useStore((state)=>state["Home"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Home"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const TextBox77Props = useStore((state)=>state["Home"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Home"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const Image46Props = useStore((state)=>state["Home"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["Home"]["Image46"]);
const Image46Cb = useImage46Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image38Props = useStore((state)=>state["Home"]["Image38"]);
const Image38IoProps = useIoStore((state)=>state["Home"]["Image38"]);
const Image38Cb = useImage38Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const Image33Props = useStore((state)=>state["Home"]["Image33"]);
const Image33IoProps = useIoStore((state)=>state["Home"]["Image33"]);
const Image33Cb = useImage33Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image35Props = useStore((state)=>state["Home"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["Home"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const Image36Props = useStore((state)=>state["Home"]["Image36"]);
const Image36IoProps = useIoStore((state)=>state["Home"]["Image36"]);
const Image36Cb = useImage36Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const Image37Props = useStore((state)=>state["Home"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["Home"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const Button6Props = useStore((state)=>state["Home"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["Home"]["Button6"]);
const Button6Cb = useButton6Cb()
const Button7Props = useStore((state)=>state["Home"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Home"]["Button7"]);
const Button7Cb = useButton7Cb()
const TextBox151Props = useStore((state)=>state["Home"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["Home"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const Image74Props = useStore((state)=>state["Home"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Home"]["Image74"]);
const Image74Cb = useImage74Cb()
const Image88Props = useStore((state)=>state["Home"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["Home"]["Image88"]);
const Image88Cb = useImage88Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const Image89Props = useStore((state)=>state["Home"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["Home"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Image90Props = useStore((state)=>state["Home"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["Home"]["Image90"]);
const Image90Cb = useImage90Cb()
const Image91Props = useStore((state)=>state["Home"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["Home"]["Image91"]);
const Image91Cb = useImage91Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const Image92Props = useStore((state)=>state["Home"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["Home"]["Image92"]);
const Image92Cb = useImage92Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Image93Props = useStore((state)=>state["Home"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["Home"]["Image93"]);
const Image93Cb = useImage93Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Image94Props = useStore((state)=>state["Home"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["Home"]["Image94"]);
const Image94Cb = useImage94Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["Home"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox180Props = useStore((state)=>state["Home"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Home"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox181Props = useStore((state)=>state["Home"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Home"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const Image95Props = useStore((state)=>state["Home"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["Home"]["Image95"]);
const Image95Cb = useImage95Cb()
const TextBox188Props = useStore((state)=>state["Home"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["Home"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["Home"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["Home"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["Home"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["Home"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["Home"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["Home"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["Home"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["Home"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["Home"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["Home"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const TextBox194Props = useStore((state)=>state["Home"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["Home"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["Home"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["Home"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const TextBox196Props = useStore((state)=>state["Home"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["Home"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()
const TextBox197Props = useStore((state)=>state["Home"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["Home"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()

  return (<>
  <Flex className="p-Home Nav_bar bpt" {...Nav_barProps} {...Nav_barCb} {...Nav_barIoProps}>
<Flex className="p-Home Navbar_wrapper bpt" {...Navbar_wrapperProps} {...Navbar_wrapperCb} {...Navbar_wrapperIoProps}>
<Flex className="p-Home Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<TextBox className="p-Home Title bpt" {...TitleProps} {...TitleCb} {...TitleIoProps}/>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
</Flex>
<Flex className="p-Home Right bpt" {...RightProps} {...RightCb} {...RightIoProps}>
<TextBox className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<TextBox className="p-Home Services bpt" {...ServicesProps} {...ServicesCb} {...ServicesIoProps}/>
<TextBox className="p-Home Project bpt" {...ProjectProps} {...ProjectCb} {...ProjectIoProps}/>
<TextBox className="p-Home Blog bpt" {...BlogProps} {...BlogCb} {...BlogIoProps}/>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<TextBox className="p-Home Book_a_call bpt" {...Book_a_callProps} {...Book_a_callCb} {...Book_a_callIoProps}/>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Hero_Section bpt" {...Hero_SectionProps} {...Hero_SectionCb} {...Hero_SectionIoProps}>
<Flex className="p-Home Hero_section_wrapper bpt" {...Hero_section_wrapperProps} {...Hero_section_wrapperCb} {...Hero_section_wrapperIoProps}>
<Flex className="p-Home Content bpt" {...ContentProps} {...ContentCb} {...ContentIoProps}>
<Div className="p-Home Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}>
<TextBox className="p-Home Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Div>
<TextBox className="p-Home Paragraph bpt" {...ParagraphProps} {...ParagraphCb} {...ParagraphIoProps}/>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Button className="p-Home Book_Button bpt" {...Book_ButtonProps} {...Book_ButtonCb} {...Book_ButtonIoProps}/>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Image bpt" {...ImageProps} {...ImageCb} {...ImageIoProps}>
<Image className="p-Home Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Div className="p-Home Trusted_Wrapper bpt" {...Trusted_WrapperProps} {...Trusted_WrapperCb} {...Trusted_WrapperIoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<Image className="p-Home Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Services_section bpt" {...Services_sectionProps} {...Services_sectionCb} {...Services_sectionIoProps}>
<Flex className="p-Home Services_wrapper bpt" {...Services_wrapperProps} {...Services_wrapperCb} {...Services_wrapperIoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<Div className="p-Home Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<UnorderedList className="p-Home UnorderedList2 bpt" {...UnorderedList2Props} {...UnorderedList2Cb} {...UnorderedList2IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<UnorderedList className="p-Home UnorderedList3 bpt" {...UnorderedList3Props} {...UnorderedList3Cb} {...UnorderedList3IoProps}/>
</Div>
</Flex>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<Div className="p-Home Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<UnorderedList className="p-Home UnorderedList4 bpt" {...UnorderedList4Props} {...UnorderedList4Cb} {...UnorderedList4IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Projects_section bpt" {...Projects_sectionProps} {...Projects_sectionCb} {...Projects_sectionIoProps}>
<Flex className="p-Home Projects_flex bpt" {...Projects_flexProps} {...Projects_flexCb} {...Projects_flexIoProps}>
<Flex className="p-Home Projects_wrapper bpt" {...Projects_wrapperProps} {...Projects_wrapperCb} {...Projects_wrapperIoProps}>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox className="p-Home Project_Text bpt" {...Project_TextProps} {...Project_TextCb} {...Project_TextIoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Flex>
<Flex className="p-Home Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Button className="p-Home Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Card_Wrapper bpt" {...Card_WrapperProps} {...Card_WrapperCb} {...Card_WrapperIoProps}>
<Flex className="p-Home Project_Card bpt" {...Project_CardProps} {...Project_CardCb} {...Project_CardIoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<Div className="p-Home Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<Flex className="p-Home Text bpt" {...TextProps} {...TextCb} {...TextIoProps}>
<TextBox className="p-Home Heading bpt" {...HeadingProps} {...HeadingCb} {...HeadingIoProps}/>
<TextBox className="p-Home Card_Title bpt" {...Card_TitleProps} {...Card_TitleCb} {...Card_TitleIoProps}/>
<TextBox className="p-Home View_project bpt" {...View_projectProps} {...View_projectCb} {...View_projectIoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Div className="p-Home Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<Flex className="p-Home Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex>
</Div>
</Flex>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Div className="p-Home Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex>
</Div>
</Flex>
</Flex>
</Div>
<Flex className="p-Home Blog_Section bpt" {...Blog_SectionProps} {...Blog_SectionCb} {...Blog_SectionIoProps}>
<Flex className="p-Home Blog_wrapper bpt" {...Blog_wrapperProps} {...Blog_wrapperCb} {...Blog_wrapperIoProps}>
<Div className="p-Home Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<Image className="p-Home Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
</Flex>
</Div>
<Flex className="p-Home Blog_item_wrapper bpt" {...Blog_item_wrapperProps} {...Blog_item_wrapperCb} {...Blog_item_wrapperIoProps}>
<Flex className="p-Home Blog_item bpt" {...Blog_itemProps} {...Blog_itemCb} {...Blog_itemIoProps}>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<TextBox className="p-Home Date bpt" {...DateProps} {...DateCb} {...DateIoProps}/>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
</Flex>
<TextBox className="p-Home Desc bpt" {...DescProps} {...DescCb} {...DescIoProps}/>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<TextBox className="p-Home Read bpt" {...ReadProps} {...ReadCb} {...ReadIoProps}/>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
</Flex>
<TextBox className="p-Home TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
</Flex>
<TextBox className="p-Home TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
</Flex>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
</Flex>
<TextBox className="p-Home TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Designer_Section bpt" {...Designer_SectionProps} {...Designer_SectionCb} {...Designer_SectionIoProps}>
<Flex className="p-Home Designer_wrapper bpt" {...Designer_wrapperProps} {...Designer_wrapperCb} {...Designer_wrapperIoProps}>
<Flex className="p-Home Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Images_wrapper bpt" {...Images_wrapperProps} {...Images_wrapperCb} {...Images_wrapperIoProps}>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home EduWork_Section bpt" {...EduWork_SectionProps} {...EduWork_SectionCb} {...EduWork_SectionIoProps}>
<Flex className="p-Home EduWork_Wrapper bpt" {...EduWork_WrapperProps} {...EduWork_WrapperCb} {...EduWork_WrapperIoProps}>
<Flex className="p-Home Edu_Wrapper bpt" {...Edu_WrapperProps} {...Edu_WrapperCb} {...Edu_WrapperIoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<Flex className="p-Home Edu_Item_Wrapper bpt" {...Edu_Item_WrapperProps} {...Edu_Item_WrapperCb} {...Edu_Item_WrapperIoProps}>
<Flex className="p-Home Edu_Item bpt" {...Edu_ItemProps} {...Edu_ItemCb} {...Edu_ItemIoProps}>
<Flex className="p-Home Edu_Title bpt" {...Edu_TitleProps} {...Edu_TitleCb} {...Edu_TitleIoProps}>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
<Image className="p-Home Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Flex className="p-Home Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<Image className="p-Home Image38 bpt" {...Image38Props} {...Image38Cb} {...Image38IoProps}/>
</Flex>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Word_wrapper bpt" {...Word_wrapperProps} {...Word_wrapperCb} {...Word_wrapperIoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<Flex className="p-Home Work_wrapper bpt" {...Work_wrapperProps} {...Work_wrapperCb} {...Work_wrapperIoProps}>
<Flex className="p-Home Work_Item bpt" {...Work_ItemProps} {...Work_ItemCb} {...Work_ItemIoProps}>
<Flex className="p-Home Work_item_wrapper bpt" {...Work_item_wrapperProps} {...Work_item_wrapperCb} {...Work_item_wrapperIoProps}>
<Image className="p-Home Image33 bpt" {...Image33Props} {...Image33Cb} {...Image33IoProps}/>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Flex>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<Image className="p-Home Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
</Flex>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<Image className="p-Home Image36 bpt" {...Image36Props} {...Image36Cb} {...Image36IoProps}/>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<Image className="p-Home Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Flex>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Testimonials_Section bpt" {...Testimonials_SectionProps} {...Testimonials_SectionCb} {...Testimonials_SectionIoProps}>
<Flex className="p-Home Testimonials_wrapper bpt" {...Testimonials_wrapperProps} {...Testimonials_wrapperCb} {...Testimonials_wrapperIoProps}>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<Carousel className="p-Home Carousel1 bpt" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Flex className="p-Home Flex126 bpt" {...Flex126Props} {...Flex126Cb} {...Flex126IoProps}>
<Image className="p-Home Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
</Flex>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Button className="p-Home Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
<Button className="p-Home Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home FAQ_Section bpt" {...FAQ_SectionProps} {...FAQ_SectionCb} {...FAQ_SectionIoProps}>
<Flex className="p-Home FAQ_Wrapper bpt" {...FAQ_WrapperProps} {...FAQ_WrapperCb} {...FAQ_WrapperIoProps}>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Flex className="p-Home Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<TextBox className="p-Home TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
</Flex>
<Flex className="p-Home FAQ_Item_Wrapper bpt" {...FAQ_Item_WrapperProps} {...FAQ_Item_WrapperCb} {...FAQ_Item_WrapperIoProps}>
<Flex className="p-Home FAQ_Left bpt" {...FAQ_LeftProps} {...FAQ_LeftCb} {...FAQ_LeftIoProps}>
<Flex className="p-Home FAQ_Item bpt" {...FAQ_ItemProps} {...FAQ_ItemCb} {...FAQ_ItemIoProps}>
<TextBox className="p-Home TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<Image className="p-Home Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
</Flex>
<Flex className="p-Home Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<Image className="p-Home Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
</Flex>
<Flex className="p-Home Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<Image className="p-Home Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
</Flex>
<Flex className="p-Home Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<Image className="p-Home Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home FAQ_Right bpt" {...FAQ_RightProps} {...FAQ_RightCb} {...FAQ_RightIoProps}>
<Flex className="p-Home Flex165 bpt" {...Flex165Props} {...Flex165Cb} {...Flex165IoProps}>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<Image className="p-Home Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Flex>
<Flex className="p-Home Flex166 bpt" {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<Image className="p-Home Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
</Flex>
<Flex className="p-Home Flex167 bpt" {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<Image className="p-Home Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
</Flex>
<Flex className="p-Home Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<Image className="p-Home Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Lets_talk bpt" {...Lets_talkProps} {...Lets_talkCb} {...Lets_talkIoProps}>
<Flex className="p-Home Call_wrapper bpt" {...Call_wrapperProps} {...Call_wrapperCb} {...Call_wrapperIoProps}>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Flex className="p-Home Flex177 bpt" {...Flex177Props} {...Flex177Cb} {...Flex177IoProps}>
<Flex className="p-Home Flex172 bpt" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<TextBox className="p-Home TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
</Flex>
<TextBox className="p-Home TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<Flex className="p-Home Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<Image className="p-Home Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<Flex className="p-Home Flex179 bpt" {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<TextBox className="p-Home TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<TextBox className="p-Home TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox className="p-Home TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
</Flex>
<Flex className="p-Home Flex180 bpt" {...Flex180Props} {...Flex180Cb} {...Flex180IoProps}>
<TextBox className="p-Home TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
<TextBox className="p-Home TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox className="p-Home TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
</Flex>
<Flex className="p-Home Flex181 bpt" {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<TextBox className="p-Home TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
<TextBox className="p-Home TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
<TextBox className="p-Home TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
</Flex>
</Flex>
</Flex>
<Div className="p-Home Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<TextBox className="p-Home TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
</Div>
</Flex>
</Flex>
  </>);
}
