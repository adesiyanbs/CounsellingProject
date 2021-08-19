<template>
  <c-box pt="34px" px="46px">
    <c-flex float="right">
      <c-box mr="16px"><img src="../../assets/logout.svg" alt=""/></c-box>
      <c-box as='router-link' to='/'><c-text mt="10px" fontSize="15px" fontWeight="700">Logout</c-text></c-box>
    </c-flex>
    <c-box mt="29px">
      <c-text fontSize="38.6px" fontWeight="700">Hello Admin</c-text>
      <c-text fontSize="20px" fontWeight="400px" color="#9C9C9C"
        >Dashboard,</c-text
      >
    </c-box>
    <c-grid templateColumns="repeat(2,1fr)" mt='39px' w='100%'>
      <c-box borderRadius='10px' h='172px' w='95%' bg="#FEFEFE" pt="23px" pb="57px" boxShadow='lg' pl="43px" mt='30px'>
        <c-box >
        <c-text mb='9px' textAlign='left' fontsize='27.6px' fontWeight='700' >Manage Counsel User</c-text>
        
        
      </c-box>
      </c-box>
      <c-box borderRadius='10px' h='172px' w='95%' bg="#FEFEFE" pt="23px" pb="57px" boxShadow='lg' pl="43px" mt='30px'>
        <c-box >
        <c-text mb='9px' textAlign='left' fontsize='27.6px' fontWeight='700' >Manage Registratio</c-text>
        
        
      </c-box>
      </c-box>
      <c-box borderRadius='10px' h='172px' w='95%' bg="#FEFEFE" pt="23px" pb="57px" boxShadow='lg' pl="43px" mt='30px'>
        <c-box >
        <c-text mb='9px' textAlign='left' fontsize='27.6px' fontWeight='700' >Manage Counsellor</c-text>
        
        
      </c-box>
      </c-box>
      
      <c-box mt='43px' borderRadius='10px' h='132px' w='90%' bg="#FEFEFE" pt="20px" pb="57px" boxShadow='lg' px="20px">
        <c-box mx='auto' px='10px' py='10px' w='50px' h='50px' bg='#F2F2F2' borderRadius='50%'><img src="../../assets/plus.svg" alt=""></c-box>
      </c-box>
      
      
    </c-grid>
  </c-box>
</template>
<script>
import { CBox, CFlex, CText,CGrid } from "@chakra-ui/vue";
export default {
  name: "AdminDash",
  components: {
    CBox,
    CFlex,
    CText,
    CGrid
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
