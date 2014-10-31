module TSOS {

    export class Pcb {

        public PC: number = 0;
        public Acc: number = 0;
        public Xreg: number = 0;
        public Yreg: number = 0;
        public Zflag: number = 0;
        public isExecuting: boolean = true;
        public instruction: string = "";
        public pid: number = 0;
        public baseAddress: number = 0;

        constructor(pid, base) {
            this.pid = pid;
            this.baseAddress = base;
        }

        public setCpuState(): void {
            _CPU.PC = this.PC;
            _CPU.Acc = this.Acc;
            _CPU.Xreg = this.Xreg;
            _CPU.Yreg = this.Yreg;
            _CPU.Zflag = this.Zflag;
            _CPU.isExecuting = this.isExecuting;
            _CPU.instruction = this.instruction;
        }

        public copyCpuState(PC, Acc, Xreg, Yreg, Zflag, isExecuting, instruction): void {
            this.PC = PC;
            this.Acc = Acc;
            this.Xreg = Xreg;
            this.Yreg = Yreg;
            this.Zflag = Zflag;
            this.isExecuting = isExecuting;
            this.instruction = instruction;
        }

    }
}
