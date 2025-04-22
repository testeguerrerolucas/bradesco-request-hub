
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, ChevronDown, Send, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { StatusBadge } from "./StatusBadge";

const formSchema = z.object({
  operatedBy: z.string({
    required_error: "Por favor, informe o nome do responsável.",
  }).min(3, {
    message: "O nome deve ter pelo menos 3 caracteres.",
  }),
  department: z.string({
    required_error: "Por favor, selecione um departamento.",
  }),
  whatIsNeeded: z.string({
    required_error: "Por favor, descreva o que é necessário.",
  }).min(5, {
    message: "A descrição deve ter pelo menos 5 caracteres.",
  }),
  whenIsNeeded: z.date({
    required_error: "Por favor, selecione uma data.",
  }),
  description: z.string().optional(),
  priority: z.string({
    required_error: "Por favor, selecione uma prioridade.",
  }),
});

const departments = [
  "Recursos Humanos",
  "Tecnologia da Informação",
  "Financeiro",
  "Marketing",
  "Atendimento ao Cliente",
  "Jurídico",
  "Comercial",
  "Operações",
];

const priorities = [
  { value: "high", label: "Alta" },
  { value: "medium", label: "Média" },
  { value: "low", label: "Baixa" },
];

const statusOptions = [
  { value: "pending", label: "Pendente" },
  { value: "approved", label: "Aprovado" },
  { value: "in_progress", label: "Em Andamento" },
  { value: "completed", label: "Concluído" },
  { value: "cancelled", label: "Cancelado" },
];

export function ServiceRequestForm() {
  const [status, setStatus] = useState("pending");
  
  // Generate a random request number
  const requestNumber = Math.floor(100000000 + Math.random() * 900000000).toString();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      operatedBy: "",
      department: "",
      whatIsNeeded: "",
      description: "",
      priority: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Solicitação enviada com sucesso!", {
      description: `Nº da Solicitação: ${requestNumber}`,
    });
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="operatedBy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Operado por</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do responsável" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Departamento</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um departamento" />
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {departments.map((department) => (
                      <SelectItem key={department} value={department}>
                        {department}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="whatIsNeeded"
          render={({ field }) => (
            <FormItem>
              <FormLabel>O que é necessário</FormLabel>
              <FormControl>
                <Input placeholder="Descrição breve da solicitação" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="whenIsNeeded"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Quando é necessário</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: ptBR })
                        ) : (
                          <span>Selecione uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prioridade</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a prioridade" />
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {priorities.map((priority) => (
                      <SelectItem key={priority.value} value={priority.value}>
                        {priority.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição detalhada</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descreva detalhadamente a sua solicitação"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Forneça todos os detalhes necessários para melhor atendimento da solicitação.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center space-x-2">
          <div className="text-sm font-medium">Status:</div>
          <StatusBadge status="pending" />
        </div>

        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant="outline"
            className="flex items-center gap-2 text-bradesco-darkGray"
          >
            <X className="h-4 w-4" /> Cancelar
          </Button>
          <Button
            type="submit"
            className="bg-bradesco-red hover:bg-bradesco-darkRed text-white flex items-center gap-2"
          >
            <Send className="h-4 w-4" /> Enviar Solicitação
          </Button>
        </div>
      </form>
    </Form>
  );
}
