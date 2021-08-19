<template>
  <c-box bg="#FBFCFF" pt="40px" px="150px">
    <c-flex w="100%" justify="space-between">
      <c-box><img src="../../assets/bowenlogo.svg" alt=""/></c-box>
      <c-box as='router-link' to='/counsellorlogin' mt="25px">
        <c-text>Are you a counsellor? Counsellor's Page</c-text>
      </c-box>
    </c-flex>

    <c-box w="12%" mt="40px" mb="45px" mx="auto"
      ><c-text fontWeight="700" fontSize="40px" color="#267FFF"
        >SSHUB</c-text
      ></c-box
    >
    <c-box borderRadius='5px' w="40%" mx="auto" px="37px" class='box' pt="37px">
      <c-box>
        <c-text mb="16px" color='#59647D' fontSize='27px' fontWeight='700' textAlign="center">Welcome Back</c-text>
        <c-text color="#ACACAC" textAlign="center" mb="22px"
          >Enter your credentials to access your page</c-text
        >
      </c-box>
      <c-form-control >
        <c-input-group  mb="36px">
          <c-input-left-element a
            ><img src="../../assets/grad.svg" alt=""
          /></c-input-left-element>
          <c-input borderRadius="5px" h="59x" placeholder="ID Number" />
        </c-input-group>
      
        <c-input-group mb='48px'>
          <c-input-left-element
            ><img src="../../assets/password.svg" alt=""
          /></c-input-left-element>
          <c-input borderRadius="5px" h="59x" placeholder="Password" />
        </c-input-group>

        <c-button as='router-link' to='/dashboard' mb='53px' h='50px' color='white' w='100%' borderRadius='12px' bg='#267FFF' fontSize='26px' fontWeight='400' >Login</c-button> 
      </c-form-control>
    </c-box>
    <c-box mt='32px' textAlign='center'>
        <c-text>Forgot Password? Reset Password</c-text>
    </c-box>
  </c-box>
</template>
<script>
import {
  CBox,
  CInput,
  CFormControl,
  CFlex,
  CButton,
  CText,
  CInputGroup,
  CInputLeftElement,
} from "@chakra-ui/vue";
export default {
  name: "StudentLogin",
  components: {
    CBox,
    CFlex,
    CButton,
    CInput,
    CFormControl,
    CText,
    CInputGroup,
    CInputLeftElement,
  },
};
</script>
<style scoped>
    .box{
        background-image: linear-gradient(to Bottom,rgba(255, 255, 255, 0.07),rgba(0, 131, 201, 0.09));
    }
</style>