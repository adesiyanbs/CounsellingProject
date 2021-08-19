<template>
  <c-box pt="34px" px="46px">
    <c-flex float="right">
      <c-box mr="16px"><img src="../../assets/logout.svg" alt=""/></c-box>
      <c-box as='router-link' to='/'><c-text mt="10px" fontSize="15px" fontWeight="700">Logout</c-text></c-box>
    </c-flex>
    <c-box mt="29px">
      <c-text fontSize="38.6px" fontWeight="700">Hello Counsellor</c-text>
      <c-text fontSize="20px" fontWeight="400px" color="#9C9C9C"
        >List Of Students,</c-text
      >
    </c-box>
    <c-box borderRadius='md' h='50vh' bg='' px='20px' pt='20px' boxShadow='md' mt='24px' w='100%'>
        <c-flex w='100%'>
            <c-text fontSize='20px' fontWeight='700' w='10%'>S/N</c-text>
            <c-text fontSize='20px' fontWeight='700' w='20%'>ID Number</c-text>
            <c-text fontSize='20px' fontWeight='700' w='15%'>Level</c-text>
            <c-text fontSize='20px' fontWeight='700' w='15%'>Gender</c-text>
            <c-text fontSize='20px' fontWeight='700' w='15%'>State</c-text>
            <c-text fontSize='20px' fontWeight='700' w='15%'>Age</c-text>
            <c-text fontSize='20px' fontWeight='700' w='10%'>Program</c-text>
        </c-flex>
        <c-flex mt='10px' w='100%'>
            <c-text fontSize='16px' fontWeight='400' w='10%'>1</c-text>
            <c-text fontSize='16px' fontWeight='400' w='20%'>sse/000/00000</c-text>
            <c-text fontSize='16px' fontWeight='400' w='15%'>200</c-text>
            <c-text fontSize='16px' fontWeight='400' w='15%'>Male</c-text>
            <c-text fontSize='16px' fontWeight='400' w='15%'>Lagos</c-text>
            <c-text fontSize='16px' fontWeight='400' w='15%'>23</c-text>
            <c-text fontSize='16px' fontWeight='400' w='10%'>CIT</c-text>
        </c-flex>
    </c-box>
  </c-box>
</template>
<script>
import { CBox, CFlex, CText, } from "@chakra-ui/vue";
export default {
  name: "StudentTable",
  components: {
    CBox,
    CFlex,
    CText,
    
  },
};
</script>
<style scoped>
.box {
  background-image: linear-gradient(
    to Bottom,
    rgba(255, 255, 255, 0.07),
    rgba(0, 131, 201, 0.09)
  );
}
</style>
