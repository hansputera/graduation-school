'use client';

import { Container } from '@/components/container';
import { Student } from '@/types';
import React from 'react';
import QRCode from 'react-qr-code';

export const Accepted: React.FC<{
  student: Student;
}> = (props) => {
  return (
    <Container
      headlineText="SELAMAT! Anda dinyatakan LULUS dari SMA Negeri 3 Palu"
      footerText={
        <>
          Selamat! Anda telah dinyatakan lulus dari Sekolah Menengah Atas ini. Status kelulusan Anda ditetapkan setelah
          verifikasi data akademik (rapor dan/atau dokumen kelulusan) selesai dilakukan. Silakan mempersiapkan diri
          untuk melanjutkan ke jenjang pendidikan berikutnya, baik di perguruan tinggi, institusi vokasi, atau program
          keahlian sesuai minat Anda.
          <br />
          <br />
          Ijazah dan dokumen kelulusan resmi akan tersedia dalam beberapa hari ke depan. Semoga perjalanan pendidikan
          dan karier Anda selalu diridai kesuksesan. Kami bangga atas pencapaian Anda!
        </>
      }
    >
      <div className="flex flex-row lg:space-x-70 space-y-10">
        <div className="flex flex-col">
          <div className="flex items-center justify-start lg:hidden">
            <QRCode
              className="p-2 bg-white"
              level="H"
              value={`student:${props.student.verval_id}`}
              style={{ height: 'auto', width: '100', maxWidth: '100' }}
            />
          </div>
          <p className="text-[#7EB8D8] text-md font-bold font-sans">
            NISN {props.student.nisn} - NIS {props.student.profile.nis}
          </p>
          <h1 className="text-xl md:text-3xl font-sans text-white font-bold">{props.student.name}</h1>
          <h2 className="text-2xl font-sans text-white font-extralight uppercase">
            {props.student.profile?.grade.length ? props.student.profile.grade : props.student.grade}
            <br />
            SMA NEGERI 3 PALU
          </h2>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end">
          <QRCode
            className="bg-white p-2"
            level="H"
            viewBox={`0 0 256 256`}
            value={`student:${props.student.verval_id}`}
            style={{ height: 'auto', maxWidth: '60%', width: '60%' }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 space-y-5">
        <div>
          <p className="text-[#7EB8D8] text-md font-bold font-sans">Tanggal Lahir</p>
          <p className="text-white font-bold font-sans text-md">{props.student.born}</p>
        </div>
        <div>
          <p className="text-[#7EB8D8] text-md font-bold font-sans">Tahun Lulus</p>
          <p className="text-white font-bold font-sans text-md">2025</p>
        </div>
        <div>
          <p className="text-[#7EB8D8] text-md font-bold font-sans">Alamat</p>
          <p className="text-white font-bold font-sans text-md">{props.student.profile.address}</p>
        </div>
      </div>
    </Container>
  );
};
