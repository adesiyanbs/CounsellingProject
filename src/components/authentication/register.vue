<template>
  <c-box bg="#FBFCFF" pt="40px" px="150px">
    <c-flex w="100%" justify="space-between">
      <c-box><img src="../../assets/bowenlogo.svg" alt=""/></c-box>
      <c-box as='router-link' to='/counsellorlogin' mt="25px">
        <c-text></c-text>
      </c-box>
    </c-flex>

    <c-box w="35%" mt="40px" mb="45px" mx="auto"  textAlign='center'
      ><c-text fontWeight="700" fontSize="40px" color="#267FFF"
        >Register</c-text
      ></c-box
    >
    <c-box borderRadius='5px' w="60%" mx="auto" px="37px" class='box' pt="37px">
      <c-box>
        <!-- <c-text mb="16px" color='#59647D' fontSize='27px' fontWeight='700' textAlign="center">Welcome Back</c-text> -->
        <c-text color="#ACACAC" textAlign="center" mb="22px"
          >Enter your credentials to Sign up for online counselling.</c-text
        >
      </c-box>
      <c-form-control >

        <c-input borderRadius="5px"  mb='30px' h="59x" placeholder='FullName' type='text'>Name</c-input>
        <c-input borderRadius="5px"  mb='30px' h="59x" placeholder='Email' type='email'>Email</c-input>
        <c-input borderRadius="5px"  mb='30px' h="59x" placeholder='Age' type='number'>Age</c-input>
        <c-input borderRadius="5px"  mb='30px' h="59x" placeholder='ID Number' type='number'>ID Number</c-input>
        <c-input borderRadius="5px"  mb='30px' h="59x" placeholder='Gender' type='text'>Gender</c-input>
        <c-input borderRadius="5px"  mb='30px' h="59x" placeholder='State' type='text'>State</c-input>
        <c-input borderRadius="5px"  mb='30px' h="59x" placeholder='Address' type='text'>Address</c-input>
        <c-input borderRadius="5px"  mb='30px' h="59x" placeholder='Phone Number' type='number'>Phone Number</c-input>

        <c-button as='router-link' to='/dashboard' mb='53px' h='50px' color='white' w='100%' borderRadius='12px' bg='#267FFF' fontSize='26px' fontWeight='400' >Register</c-button> 
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
  
} from "@chakra-ui/vue";
export default {
  name: "Register",
  components: {
    CBox,
    CFlex,
    CButton,
    CInput,
    CFormControl,
    CText,
 
  },
};
</script>
<style scoped>
    .box{
        background-image: linear-gradient(to Bottom,rgba(255, 255, 255, 0.07),rgba(0, 131, 201, 0.09));
    }
</style>