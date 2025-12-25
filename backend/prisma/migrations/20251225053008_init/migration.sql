-- CreateTable
CREATE TABLE "Patrimonio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Patrimonio_pkey" PRIMARY KEY ("id")
);
