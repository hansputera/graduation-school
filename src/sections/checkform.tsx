'use clent';

import { Container } from '@/components/container';
import { Student } from '@/types';
import { graduationCheck } from '@/validations/graduationCheck';
import { ArkErrors } from 'arktype';
import Image from 'next/image';
import React from 'react';
import dynamic from 'next/dynamic';

const AcceptedLazy = dynamic(() => import('./accepted'));

export const CheckFormSection = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [nisn, setNisn] = React.useState<string>();
  const [date, setDate] = React.useState<{
    month: number;
    day: number;
    year: number;
  }>({
    month: 0,
    day: 0,
    year: 0,
  });
  const [error, setError] = React.useState<string>();
  const [data, setData] = React.useState<Student>();

  const onSubmit = async () => {
    if (!nisn || !date.day || !date.month || !date.year) {
      setIsLoading(false);
      setError('NISN atau Tanggal Lahir tidak boleh kosong');
      return;
    }

    const payload = graduationCheck({
      nisn: nisn.toString(),
      date,
    });

    if (payload instanceof ArkErrors) {
      setIsLoading(false);
      setError(payload.summary);
      return;
    }

    try {
      const response = await fetch('/api/graduation', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      setIsLoading(false);

      if (json.message && !json.ok) {
        setError(json.message);
        return;
      }

      setData(json.data);

      setError(undefined);
    } catch (e) {
      setIsLoading(false);
      setError((e as Error).message);
    }
  };

  return data ? (
    <AcceptedLazy student={data} />
  ) : (
    <Container>
      <div className="flex justify-center md:justify-start items-center">
        <Image
          src={'https://avatars.githubusercontent.com/u/130784785?s=200&v=4'}
          alt={'Logo SMAN 3 PALU'}
          width={150}
          height={150}
        />
        <Image
          src={'/img/dinprov.png'}
          alt={'Logo Dinas Pendidikan Provinsi Sulawesi Tengah'}
          width={150}
          height={150}
        />
      </div>
      <h1 className="text-white text-2xl md:text-3xl font-bold uppercase max-w-xl md:max-w-xl mt-3">
        Pengumuman Kelulusan SMAN 3 PALU {new Date().getFullYear()}
      </h1>
      <p className="text-gray-500 text-lg font-sans font-medium">
        Masukkan Nomor Induk Siswa Nasional (NISN) dan Tanggal Lahir.
      </p>

      <form
        className="flex mt-5 flex-col space-y-5"
        onSubmit={(ev) => {
          ev.preventDefault();
          if (!isLoading) {
            setIsLoading(true);
            onSubmit();
          }
        }}
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="nisn" className="text-cyan-400 font-bold text-md">
            Nomor Induk Siswa Nasional (NISN)
          </label>
          <input
            id="nisn"
            name="nisn"
            onChange={(ev) => setNisn(ev.target.value)}
            type="text"
            disabled={isLoading}
            className="p-4 bg-gray-500/80 text-white rounded-md font-semibold"
            placeholder="NISN pada kartu pelajar/rapor milik Anda"
          />
        </div>
        <div className="flex flex-col space-y-2 space-x-3">
          <label htmlFor="dob" className="text-cyan-400 font-bold text-md">
            Tanggal Lahir
          </label>
          <div className="flex flex-col md:flex-row space-x-3 space-y-3">
            <input
              className="p-4 bg-gray-500/80 text-white rounded-md font-semibold w-full"
              placeholder="Tanggal"
              name="date"
              id="date"
              type="number"
              disabled={isLoading}
              onChange={(ev) =>
                setDate({
                  ...date,
                  day: ev.currentTarget.valueAsNumber,
                })
              }
            />
            <p className="text-white text-4xl hidden md:block">/</p>
            <input
              className="p-4 bg-gray-500/80 text-white rounded-md font-semibold w-full"
              placeholder="Bulan"
              name="month"
              type="number"
              id="month"
              disabled={isLoading}
              onChange={(ev) =>
                setDate({
                  ...date,
                  month: ev.currentTarget.valueAsNumber,
                })
              }
            />
            <p className="text-white text-4xl md:block hidden">/</p>
            <input
              className="p-4 bg-gray-500/80 text-white rounded-md font-semibold w-full"
              placeholder="Tahun"
              name="year"
              type="number"
              id="year"
              disabled={isLoading}
              onChange={(ev) =>
                setDate({
                  ...date,
                  year: ev.currentTarget.valueAsNumber,
                })
              }
            />
          </div>
        </div>
        <div>{error && <p className="font-sans text-red-400 italic font-medium">{error}</p>}</div>
        <div className="flex space-x-5 justify-center items-center">
          <button
            className="p-3 text-white bg-[#004599] rounded-4xl text-md w-full font-bold font-sans hover:cursor-pointer disabled:opacity-50"
            type="submit"
            disabled={isLoading}
          >
            LIHAT HASIL
          </button>
        </div>
      </form>
      <p className="text-white mt-5 opacity-50 text-center">
        This site is not affiliated with SNPMB.
        <br />
        Made with ❤ by{' '}
        <a href="https://linkedin.com/in/hansputera" className="text-blue-300">
          Hxxc
        </a>{' '}
        for SMAN 3 PALU
      </p>
    </Container>
  );
};

export default CheckFormSection;
