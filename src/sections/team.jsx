import Team_member from "../components/team_member";

export default function team() {
  return (
    <div className="h-auto rounded-md lg:px-8 w-[90%] lg:w-[60%] mx-2 ml-4 lg:ml-14 bg-white py-6 px-3 mt-6 pb-12">
      <h2 className="font-semibold text-3xl mb-4">Team</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        sapiente consequatur quo nam repudiandae blanditiis unde autem aliquam
        quod, facilis quaerat voluptas vero, iusto culpa!
      </p>
      <div>
        <Team_member
          image="../../public/images/member1.png"
          name="Tom Cruise"
          designation="Actor/Director"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        sapiente consequatur quo nam repudiandae blanditiis unde autem aliquam
        quod, facilis quaerat voluptas vero, iusto culpa! repudiandae blanditiis unde autem aliquam
        quod, facilis quaerat voluptas vero, iusto culpa!"
        />
        <Team_member
          image="../../public/images/member2.png"
          name="Olivia "
          designation="Actor/Director"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        sapiente consequatur quo nam repudiandae blanditiis unde autem aliquam
        quod, facilis quaerat voluptas vero, iusto culpa! repudiandae blanditiis unde autem aliquam
        quod, facilis quaerat voluptas vero, iusto culpa!"
        />
        <Team_member
          image="../../public/images/member3.png"
          name="John "
          designation="Actor/Director"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        sapiente consequatur quo nam repudiandae blanditiis unde autem aliquam
        quod, facilis quaerat voluptas vero, iusto culpa! repudiandae blanditiis unde autem aliquam
        quod, facilis quaerat voluptas vero, iusto culpa!"
        />
      </div>
    </div>
  );
}
