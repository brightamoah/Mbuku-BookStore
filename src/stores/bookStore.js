import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useBookStore = defineStore('bookStore', () => {
 
    const books = ref([
        {
        name: "A Romance of many Dimensions",
        description: "Storybook",
        image: "",
        price: "amount"
        },
        {
            name: "Adun, the beautiful",
            description: "Storybook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Agriculture Learner's Book - Grade 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Agriculture Teacher's Book - Grade 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Amazing Daisy",
            description: "Storybook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Art & Craft Teacher's guide - Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "THINK BIG - BEN CARSON",
            description: "novel ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Bible Stories",
            description: "Religion ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Chemchem za Kiswahili -  Kidato cha nne",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "English Literacy Activities Learner's Book - Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Everyday Hygiene & Nutrition Activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Everyday Homescience Grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Everyday Hygiene and Nutrition Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Everyday Hygiene and Nutrition Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Foundation Hygiene and Activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Foundation Music Grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "GOOD NEWS BIBLE",
            description: "Religion ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Growing In Christ CRE Activities Grade 2 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Growing In Christ CRE Activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Growing In Christ CRE Activities Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Growing In Christ CRE Activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Growing In Christ CRE Activities Grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Health Education Grade 7 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Health Education Grade 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Integrated Science Grade 7 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Inventor Business Studies Book 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Inventor Business Studies Book 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Inventor Business Studies Book 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Inventor Business Studies Book 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Kiswahili Dadisi Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Kiswahili Dadisi Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Kiswahili Dadisi Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Kiswahili Dadisi Grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Kiswahili Darasa la 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Kiswahili Darasa la 6",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Kiswahili Darasa la 8",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Kiswahili kwa darasa la 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary CRE Activities Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary CRE Activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary English Activities Grade 1 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary English Activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary English Literacy Activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary English Literacy Activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary Environmental Activities Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionarry Gredi 1 - Mazoezi ya Kiswahili",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary Mathematical Activities Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary Mathematical Activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "KLB Visionary Music Activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Let's Do Mathematics Activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Let's Do Mathematics Activities Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Let's Do Mathematics Activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Let's Do Mathematics Activities Grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Let' Learn English Book 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Let' Learn English Book 6",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Let' Learn English Book 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Let' Learn English Book 8",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Lets Learn Mathematics Book 6",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Lets Learn Mathematics Book 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Living Health Learner's Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Art & Craft Activities Grade 1 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Art & Craft Grade 4 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Art & Craft Grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Computer Science Grade 7 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Computer Science Grade 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn CRE Activities Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn CRE Activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn CRE Grade 6 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn CRE Grade 6 ",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn CRE Grade 7 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn CRE Grade 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn English Grade 4 ",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn English Grade 6 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn English Grade 7 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn English learner's book Grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn English Literacy Activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn English Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn English Grade 4 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Hygiene & Nutrition Activities GRADE 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Hygiene & Nutrition Activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Hygiene & Nutrition Activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Integrated Science Grade 7 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Integrated Science Grade 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn English grade 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Mathematics Activities grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Mathematics Grade 7 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Mathematics Grade 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Social Studies grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Longhorn Social Studies Teacher's Guide Grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Mathematics Grade 1 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Mathematics Grade 3 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Modern Agriculture Grade 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Mwanga wa Kiswahili Gredi ya 5 - Mwongozo wa mwalimu",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Mwanga wa Kiswahili Gredi ya 5 ",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "My Book of BIBLE STORIES",
            description: "Religion ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "New Integrated English Book 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "New Integrated English Book 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "New Integrated English Book 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "New Integrated English Book 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "New progressive primary english GRADE 3 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "New progressive primary english GRADE 3 ",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "New progressive primary english GRADE 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        
        {
            name: "Primary CRE Book 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary CRE Book 6",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary CRE Book 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary CRE Book 8",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary Science book 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary Science book 6",
            description: "description ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary Science book 7",
            description: "description ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary Science book 8",
            description: "description ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary Social Studies Book 5",
            description: "description ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary Social Studies Book 6",
            description: "description ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary Social Studies Book 7",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Primary Social Studies Book 8",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Read with us Grade 3 - Teacher's Guide",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Biology Form 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Biology Form 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Biology Form 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Biology Form 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Chemistry Book 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Chemistry Book 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Chemistry Book 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Chemistry Book 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Geography form 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Geography form 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Geography form 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Geography form 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Mathematics Form 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Mathematics Form 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Mathematics Form 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Mathematics Form 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Physics Book 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Physics Book 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Physics Book 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Secondary Physics Book 4",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Super Minds Agriculture Grade 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Super Minds CRE Grade 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Super Minds English Learner's Book Grade 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Super Minds Home Science Learner's Book 6",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Super minds Mathematics learner's book GRADE 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Super minds Science and Technology GRADE 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Super minds Social Studies Grade 5",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "The 39 steps",
            description: "novel ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "THE BIBLE",
            description: "Religion ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "THE HOLY BIBLE",
            description: "Religion ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Visionary CRE activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: " Visionary English Activities Grade 2",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Visionary English literacy activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Visionary Environmental activities Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
       
        {
            name: "Visionary Hygiene and Nutrition Grade 3",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Visionary Mathematics Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Visionary Movement Activities Grade 1",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        {
            name: "Wimbo",
            description: "Coursebook ",
            image: "path to image ",
            price: "amount"
        },
        
        ])


 return {books}
})


if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useBookStore, import.meta.hot))
}

