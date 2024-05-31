import { FormProvider, useForm } from "react-hook-form";
import HotelDetailsSection from './HotelDetailsSection';

export type HotelFormData= {

    name:string;
    country:string;
    city:string;
    description:string;
    type: string;
    pricePerNight:number;
    starRating:number;
    facilities:string[];
    imageFiles:FileList;
    adultCount:number;
    childCount:number;

}
const ManageHotelForm = () => {
    const formMethods= useForm<HotelFormData>();


  return (
    <FormProvider {...formMethods}>
        <form>
       <HotelDetailsSection/>
        </form>
    </FormProvider>
    
  )
}

export default ManageHotelForm
