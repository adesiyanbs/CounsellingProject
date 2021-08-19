<template>
  <c-box pt="34px" px="46px">
    <c-flex float="right">
      <c-box mr="16px"><img src="../../assets/logout.svg" alt=""/></c-box>
      <c-box as='router-link' to='/'><c-text mt="10px" fontSize="15px" fontWeight="700">Logout</c-text></c-box>
    </c-flex>
    <c-box mt="29px">
      <c-text fontSize="38.6px" fontWeight="700">Hello Makinde</c-text>
      <c-text fontSize="20px" fontWeight="400px" color="#9C9C9C"
        >Dashboard</c-text
      >
    </c-box>
    <c-grid templateColumns="repeat(3,1fr)" mt='39px' w='100%'>
      <c-box borderRadius='10px' h='287px' w='90%' bg="#FEFEFE" pt="50px" pb="57px" boxShadow='lg' px="20px">
        <c-box w='30%' mx='auto'><img src="../../assets/mk.svg" alt=""/></c-box>
        <c-box mt='28px' >
        <c-text mb='9px' textAlign='center' fontsize='24px' fontWeight='700' >Join Counselling</c-text>
        <c-box w='100%'>
            <c-text color='#ABAAAA' textAlign='center' fontSize='13px' fontWeight='400px'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ea
          unde. </c-text
        >
        </c-box>
        
      </c-box>
      </c-box>
      <c-box borderRadius='10px' h='287px' w='90%' bg="#FEFEFE" pt="20px" pb="57px" boxShadow='lg' px="20px">
          <c-flex w='100%' justify='space-between'>
        <c-box px='10px' py='10px' w='50px' h='50px' bg='#FFE3E3' borderRadius='50%'><img src="../../assets/clock.svg" alt=""/></c-box>
        <c-box mt='25px'><img src="../../assets/dot.svg" alt=""></c-box>
          </c-flex>
        <c-box mt='8px' >
        <c-text mb='9px' textAlign='left' fontsize='24px' fontWeight='700' >Remainder</c-text>
        <c-box w='100%'>
            <c-text textAlign='left' fontSize='13px' fontWeight='400px' color='#ABAAAA'
          >Lorem ipsum dolor sit amet consectetur adipisicing.</c-text
        >
        </c-box>
        <c-flex mt='24px' w='60%' justify='space-between'> 
            <c-box><img src="../../assets/task.svg" alt=""></c-box>
            <c-text fontSize='13px' fontWeight='400' mt='3px'  color='#9C9C9C'>Task Status: pending</c-text>
        </c-flex>
        <c-flex mt='17px' w='60%' justify='space-between'> 
            <c-box><img src="../../assets/calendat.svg" alt=""></c-box>
            <c-box><c-text fontSize='13px' fontWeight='400' mt='3px' color='#9C9C9C'>Date: 01.02.2021</c-text></c-box>
        </c-flex>
      </c-box>
      </c-box>
      <c-box borderRadius='10px' h='287px' w='90%' bg="#FEFEFE" pt="20px" pb="57px" boxShadow='lg' px="20px">
          <c-flex w='100%' justify='space-between'>
        <c-box px='10px' py='10px' w='50px' h='50px' bg='#A3E193' borderRadius='50%'><img src="../../assets/woman.svg" alt=""/></c-box>
        <c-box mt='25px'><img src="../../assets/dot.svg" alt=""></c-box>
          </c-flex>
        <c-box mt='8px' >
        <c-text mb='9px' textAlign='left' fontsize='24px' fontWeight='700' >Counsel</c-text>
        <c-box w='100%'>
            <c-text textAlign='left' fontSize='13px' fontWeight='400px' color='#ABAAAA'
          >Lorem ipsum dolor sit amet consectetur adipisicing.</c-text
        >
        </c-box>

      </c-box>
      </c-box>
      <c-box mt='43px' borderRadius='10px' h='287px' w='90%' bg="#FEFEFE" pt="20px" pb="57px" boxShadow='lg' px="20px">
          <c-flex w='100%' justify='space-between'>
        <c-box px='10px' py='10px' w='50px' h='50px' bg='#FFE3E3' borderRadius='50%'><img src="../../assets/clock.svg" alt=""/></c-box>
        <c-box mt='25px'><img src="../../assets/dot.svg" alt=""></c-box>
          </c-flex>
        <c-box mt='8px' >
        <c-text mb='9px' textAlign='left' fontsize='24px' fontWeight='700' >Counsel</c-text>
        <c-box w='100%'>
            <c-text textAlign='left' fontSize='13px' fontWeight='400px' color='#ABAAAA'
          >Lorem ipsum dolor sit amet consectetur adipisicing.</c-text
        >
        </c-box>
        
      </c-box>
      </c-box>
      <c-box mt='43px' borderRadius='10px' h='287px' w='90%' bg="#FEFEFE" pt="20px" pb="57px" boxShadow='lg' px="20px">
          <c-flex w='100%' justify='space-between'>
        <c-box px='10px' py='10px' w='50px' h='50px' bg='#FAED7B' borderRadius='50%'></c-box>
        <c-box mt='25px'><img src="../../assets/dot.svg" alt=""></c-box>
          </c-flex>
        <c-box mt='8px' >
        <c-text mb='9px' textAlign='left' fontsize='24px' fontWeight='700' >Counsel</c-text>
        <c-box w='100%'>
            <c-text textAlign='left' fontSize='13px' fontWeight='400px' color='#ABAAAA'
          >Lorem ipsum dolor sit amet consectetur adipisicing.</c-text
        >
        </c-box>
        
      </c-box>
      </c-box>
      
      <c-box mt='43px' borderRadius='10px' h='132px' w='90%' bg="#FEFEFE" pt="20px" pb="57px" boxShadow='lg' px="20px">
        <c-box mx='auto' px='10px' py='10px' w='50px' h='50px' bg='#F2F2F2' borderRadius='50%'><img src="../../assets/plus.svg" alt=""></c-box>
      </c-box>
      
      
    </c-grid>
  </c-box>
</template>
<script>
import { CBox, CGrid, CFlex, CText } from "@chakra-ui/vue";
export default {
  name: "Dashboard",
  components: {
    CBox,
    CFlex,
    CText,
    CGrid,
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
