export default function Page() {
   return (
      <div className="w-full h-screen">
         <div className="w-full h-full flex items-center bg-gradient-to-t from-black to-emerald-500">  
            <div className="w-full h-3/5 md:h-3/5 flex flex-col md:flex-row items-center">
               <div className="hidden md:block w-3/12 h-1 bg-orange-500"></div>
               <div className="w-11/12 md:w-6/12 h-4/5 md:h-full border-4 border-orange-500 bg-black p-5 overflow-y-auto text-white">
                  <p> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               <div className="md:hidden w-full h-1 mt-10 bg-orange-500"></div>
               <div className="hidden md:block w-3/12 h-1 bg-orange-500"></div>
            </div>
         </div>
      </div>
   )
}