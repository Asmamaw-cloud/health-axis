import { Body, Controller, Get, Param, Post, Put, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// Lightweight stub controller for shop endpoints used by the frontend.
// These return minimal shapes so deployed frontend doesn't get 404s.

@ApiTags('shop')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('shop')
export class ShopController {
  @Get('products')
  async listProducts(@Query('page') _page = '1', @Query('limit') _limit = '10') {
    return { data: [], meta: { page: Number(_page), limit: Number(_limit), total: 0 } };
  }

  @Get('products/:id')
  async getProduct(@Param('id') _id: string) {
    return { id: _id, name: 'Unknown product', description: '' };
  }

  @Get('my-products')
  async myProducts() {
    return [];
  }

  @Post('products')
  async createProduct(@Body() _body: any) {
    return { success: true };
  }

  @Put('products/:id')
  async updateProduct(@Param('id') _id: string, @Body() _body: any) {
    return { success: true };
  }

  @Delete('products/:id')
  async deleteProduct(@Param('id') _id: string) {
    return { success: true };
  }

  @Get('cart')
  async getCart() {
    return { items: [] };
  }

  @Post('cart/items')
  async addToCart(@Body() _body: any) {
    return { success: true };
  }

  @Delete('cart/items/:itemId')
  async removeFromCart(@Param('itemId') _itemId: string) {
    return { success: true };
  }

  @Get('orders')
  async listOrders() {
    return [];
  }

  @Get('my-orders')
  async myOrders() {
    return [];
  }

  @Post('orders')
  async createOrder(@Body() _body: any) {
    return { success: true };
  }

  @Get('orders/:id')
  async getOrder(@Param('id') _id: string) {
    return { id: _id };
  }

  @Put('orders/:id/status')
  async updateOrderStatus(@Param('id') _id: string, @Body() _body: any) {
    return { success: true };
  }

  @Post('orders/:id/cancel')
  async cancelOrder(@Param('id') _id: string, @Body() _body: any) {
    return { success: true };
  }
}
