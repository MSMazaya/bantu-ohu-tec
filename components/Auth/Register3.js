import React from "react";
import Link from "next/link";

const Register3 = (props) => {
  return (
    <div className="animate-fade">
    <form className="px-12 py-10" onSubmit={() => props.setActive("3")}>
      <div className="text-2xl font-semibold">Lakukan Pembayaran</div>
      <div className="mt-2">
        Untuk menjadi intern resmi, kamu diharuskan membayar biaya registrasi.
      </div>

      <div className="mt-10">Bukti Pembayaran</div>
      <div className="text-xs font-extralight">
        kirim ke XXXXXXXX a.n. Willy Wonka
      </div>
      <input
        className="mt-2 w-full md:w-4/5 max-w-sm px-3 py-1.5 rounded-2xl bg-white/20 backdrop-blur-none outline-none"
        type="file"
        // required
        value={props.bukti}
        onChange={(e) => props.setBukti(e.target.value)}
      />

      <div className="mt-16 flex flex-row-reverse justify-end gap-2">
        <input
            type={"submit"}
            value="FINISH"
            className="px-8 md:px-12 py-2 rounded-xl text-md font-bold bg-gradient-to-br from-[#9ADFD3] to-[#2F9685] cursor-pointer"
          />
        <button
          className="px-8 md:px-12 py-2 rounded-xl text-md font-bold border"
          onClick={() => props.setActive("2")}
        >
          BACK
        </button>
      </div>
      </form>
      </div>
  );
};

export default Register3;
