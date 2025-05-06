import React from 'react';
import img from '../assets/Rectangle 3988.png'
import { CiCalendarDate } from 'react-icons/ci';

const Sports1 = () => {
    return (
        <div className='p-[5%]'>
             <img className="my-3 w-full" src={img} alt="" />
            
                            <p className="font-bold text-xl">
                              Boyern slams authorities Over Flight Dealy to Club world Cup
                            </p>
            
                            <div className="author flex items-center justify-between mt-5 ">
                              <p>Sports</p>
                              <p className="flex opacity-80 items-center gap-1">
                                <CiCalendarDate></CiCalendarDate> May/05/2025{" "}
                              </p>
                            </div>


                            <div className="text-base leading-7 text-gray-800 space-y-4">
        <p>
          Bayern Munich has expressed strong frustration after facing unexpected travel delays en route to the Club World Cup in Saudi Arabia. The German champions were reportedly held up for over 10 hours due to administrative and air traffic control issues that affected their flight clearance.
        </p>

        <p>
          Club officials, including head coach Julian Nagelsmann, criticized the handling of the situation, calling it "unacceptable" and "disruptive to professional football operations." Players were reportedly forced to wait on the tarmac overnight without proper rest or accommodations.
        </p>

        <p>
          “We prepared well for this important international competition, and it’s disappointing to be treated with such disregard,” said club spokesperson Thomas Müller. “This isn't just about Bayern — it's about respect for teams and the sport.”
        </p>

        <p>
          The delay may affect Bayern’s preparations for their first match in the tournament, with tight schedules and training plans already impacted. FIFA has yet to comment on the matter, though the German FA is reportedly seeking answers from local aviation authorities.
        </p>

        <p>
          Fans and analysts have also voiced concern on social media, with some accusing the organizers of mismanagement. The situation adds fuel to ongoing debates about the logistical planning of international tournaments.
        </p>
      </div>




        </div>
    );
};

export default Sports1;

