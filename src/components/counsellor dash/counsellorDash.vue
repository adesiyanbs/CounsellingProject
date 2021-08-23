<template>
  <c-box pt="34px" px="46px">
    <c-flex float="right">
      <c-box mr="16px"><img src="../../assets/logout.svg" alt=""/></c-box>
      <c-box as='router-link' to='/'><c-text mt="10px" fontSize="15px" fontWeight="700">Logout</c-text></c-box>
    </c-flex>
    <c-box mt="29px">
      <c-text fontSize="38.6px" fontWeight="700">Hello Adam</c-text>
      <c-text fontSize="20px" fontWeight="400px" color="#9C9C9C"
        >Dashboard,</c-text
      >
    </c-box>
    <c-flex w='100%'>
      <c-box mt='39px' w='35%'>
     <c-box borderRadius='10px' h='172px' w='90%' bg="#FEFEFE" pt="23px" pb="57px" boxShadow='lg' pl="43px">
        <c-box >
        <c-text mb='9px' textAlign='left' fontsize='27.6px' fontWeight='700' >Availability</c-text>
        
        
      </c-box>
      </c-box>
      <c-box as='router-link' to='/studentlist'>
        <c-box  borderRadius='10px' h='287px' w='90%' bg="#FEFEFE" mt='23px' pt="50px" pb="57px" boxShadow='lg' px="20px">
        <c-box px='10px' py='10px' w='50px' h='50px' mx='auto' bg='#FFF065' borderRadius='50%'><img src="../../assets/heart.svg" alt=""/></c-box>
        <c-box mt='28px' >
        <c-text mb='9px' textAlign='center' fontsize='24px' fontWeight='700' >Create Counsel</c-text>
        <c-box w='100%'>
            <c-text color='#ABAAAA' textAlign='center' fontSize='13px' fontWeight='400px'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ea
          unde. </c-text
        >
        </c-box>
        
      </c-box>
      </c-box>
      </c-box>
    </c-box>
    <c-box mt='39px' w='55%' >
      
      <c-box boxShadow='lg' mr='29px' borderRadius='15px' bg="#fff" pt='36px' pb='20px' pl='44.7px'>
        <c-box><c-text fontSize='27.6pxx' mb='27px' fontWeight='700'>Pending Counsel</c-text></c-box>
          <c-flex justify='space-between' w='90%'>
            <c-box><img src="../../assets/pic.svg" alt=""/></c-box>
            <c-box mt='12px'><c-text fontSize='15px' fontWeight='700'>Adebowale Segun</c-text></c-box>
            <c-flex mt='12px' w='37%' justify='space-between'>
              <c-button bg='#939393' h='27px' borderRadius='10px' color='white' fontSize='14px' fontWeight='700'>Reject</c-button>
            <c-button bg='#267FFF'  h='27px' borderRadius='10px' color='white' fontSize='14px' fontWeight='700'>Accept</c-button>
            </c-flex>
          </c-flex>
          <c-divider mb="10px" mt="9px" />
          
          <c-flex justify='space-between' w='90%'>
            <c-box><img src="../../assets/pic.svg" alt=""/></c-box>
            <c-box mt='12px'><c-text fontSize='15px' fontWeight='700'>Adebowale Segun</c-text></c-box>
            <c-flex mt='12px' w='37%' justify='space-between'>
              <c-button bg='#939393' h='27px' borderRadius='10px' color='white' fontSize='14px' fontWeight='700'>Reject</c-button>
            <c-button bg='#267FFF'  h='27px' borderRadius='10px' color='white' fontSize='14px' fontWeight='700'>Accept</c-button>
            </c-flex>
          </c-flex>
          <c-divider mb="10px" mt="9px" />
          <c-flex justify='space-between' w='90%'>
            <c-box><img src="../../assets/pic.svg" alt=""/></c-box>
            <c-box mt='12px'><c-text fontSize='15px' fontWeight='700'>Adebowale Segun</c-text></c-box>
            <c-flex mt='12px' w='37%' justify='space-between'>
              <c-button bg='#939393' h='27px' borderRadius='10px' color='white' fontSize='14px' fontWeight='700'>Reject</c-button>
            <c-button bg='#267FFF'  h='27px' borderRadius='10px' color='white' fontSize='14px' fontWeight='700'>Accept</c-button>
            </c-flex>
          </c-flex>
          <c-divider mb="10px" mt="9px" />
          <c-flex justify='space-between' w='90%'>
            <c-box><img src="../../assets/pic.svg" alt=""/></c-box>
            <c-box mt='12px'><c-text fontSize='15px' fontWeight='700'>Adebowale Segun</c-text></c-box>
            <c-flex mt='12px' w='37%' justify='space-between'>
              <c-button bg='#939393' h='27px' borderRadius='10px' color='white' fontSize='14px' fontWeight='700'>Reject</c-button>
            <c-button bg='#267FFF'  h='27px' borderRadius='10px' color='white' fontSize='14px' fontWeight='700'>Accept</c-button>
            </c-flex>
          </c-flex>
          <c-divider mb="10px" mt="9px" />
          

        </c-box>
         <c-box borderRadius='10px' h='172px' w='95%' bg="#FEFEFE" pt="23px" pb="57px" boxShadow='lg' pl="43px" mt='30px'>
        <c-box >
        <c-text mb='9px' textAlign='left' fontsize='27.6px' fontWeight='700' >Counsel</c-text>
        
        
      </c-box>
      </c-box>
    </c-box>
    </c-flex>
  </c-box>
</template>
<script>
import { CBox, CFlex, CText,CButton } from "@chakra-ui/vue";
export default {
  name: "CounsellorDash",
  components: {
    CBox,
    CFlex,
    CText,
    CButton
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
