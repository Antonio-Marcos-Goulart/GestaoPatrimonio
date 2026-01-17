/*
  Warnings:

  - Added the required column `categoriaId` to the `Patrimonio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patrimonio" ADD COLUMN     "categoriaId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Patrimonio" ADD CONSTRAINT "Patrimonio_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
